import anthropic from "../anthropic.js";
import { getBalance } from "../tools/bank.js";
import { getWeather } from "../tools/weather.js";
import { transferMoney } from "../tools/transfer.js";

export async function askBankAgent(userPrompt: string) {

    const response = await anthropic.messages.create({

        model: "claude-sonnet-4-5",

        max_tokens: 500,

        messages: [
            {
                role: "user",
                content: userPrompt
            }
        ],

        tools: [
            {
                name: "get_balance",
                description: "Retrieve the customer's bank account balance.",

                input_schema: {
                    type: "object",
                    properties: {
                        accountNumber: {
                            type: "string",
                            description: "Customer account number"
                        }
                    },
                    required: ["accountNumber"]
                }
            },
            {
                name: "get_weather",
                description: "Retrieve the current weather for a given city.",
                input_schema: {
                    type: "object",
                    properties: {
                        city: {
                            type: "string"
                        }
                    },
                    required: [
                        "city"
                    ]
                }

            },
            {
                name: "transfer_money",
                description: "transfer money from one account to another.",
                input_schema: {
                    type: "object",
                    properties: {
                        accountNumber: {
                            type: "string"
                        },
                        amount: {
                            type: "number"
                        }

                    },
                    required: [
                        "accountNumber",
                        "amount"
                    ]

                }
            }
        ]
    });
    //console.log("Claude Response:");
    // console.log("Claude Response:" + JSON.stringify(response.content, null, 2));
    const toolResults: any[] = [];
    //console.log(JSON.stringify(response.content, null, 2));
    for (const content of response.content) {

        if (content.type === "text") {
            console.log("Claude:", content.text);
        }

        if (content.type === "tool_use") {
            console.log("Claude selected:", content.name);
            if (content.name === "get_balance") {
                console.log("Tool Name:", content.name);
                console.log("Tool Input:", content.input);
                const input = content.input as { accountNumber: string };

                const toolResult = await getBalance(input.accountNumber);
                toolResults.push({
                    type: "tool_result",
                    tool_use_id: content.id,
                    content: JSON.stringify(toolResult)
                });

                console.log("Tool Result:", toolResult);
            }
            if (content.name === "get_weather") {
                console.log("Tool Name:", content.name);
                console.log("Tool Input:", content.input);
                const input = content.input as { city: string };

                const toolResult = await getWeather(input.city);
                toolResults.push({
                    type: "tool_result",
                    tool_use_id: content.id,
                    content: JSON.stringify(toolResult)
                });
            }
            if (content.name === "transfer_money") {

                const input = content.input as {
                    accountNumber: string;
                    amount: number;
                };

                const toolResult = await transferMoney(
                    input.accountNumber,
                    input.amount
                );

                console.log(toolResult);
            }



        }
    }

    const finalResponse = await anthropic.messages.create({
        model: "claude-sonnet-4-5",
        max_tokens: 500,
        messages: [
            {
                role: "user",
                content: userPrompt
            },
            {
                role: "assistant",
                content: response.content
            },
            {
                role: "user",
                content: toolResults
            }
        ]

    });
    console.log("Final Response:");
    const answers: string[] = [];
    for (const item of finalResponse.content) {

        if (item.type === "text") {
            answers.push(item.text);
        }
        else {
            console.warn("Unexpected response block:", item);
        }

    }

    return answers.join("\n");
}