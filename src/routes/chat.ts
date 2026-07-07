import anthropic from "../anthropic.js";

async function chat() {
    try {
        const response = await anthropic.messages.create({
            model: "claude-sonnet-4-5",
            max_tokens: 200,
            messages: [
                {
                    role: "user",
                    content: "Hello Claude! My name is Megha. Tell me one interesting fact about AI."
                }
            ]
        });

        console.log(response.content);

    } catch (error) {
        console.error(error);
    }
}

chat();