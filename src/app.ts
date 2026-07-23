import express from "express";
import { askBankAgent } from "./agent/bankAgent.js";

const app = express();

app.use(express.json());

app.post("/chat", async (req, res) => {

    const prompt = req.body.prompt;

    const answer = await askBankAgent(prompt);

   res.json(answer);

});

app.listen(3000, () => {
    console.log("Server started");
});