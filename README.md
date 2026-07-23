# 🤖 LLM Agent POC

A Proof of Concept demonstrating how to build an AI Agent using **Node.js** and **Express.js**, along with automated **LLM evaluation** using **DeepEval**.

The project exposes a REST API that interacts with a Large Language Model (LLM) and validates the quality of generated responses using DeepEval metrics, enabling automated testing of GenAI applications.

---

## 🚀 Features

* AI Agent built using **Node.js** and **Express.js**
* RESTful API for interacting with an LLM
* Modular project structure
* Automated LLM testing with **DeepEval**
* Response quality validation
* Easily extensible for additional evaluation metrics

---

## 🛠️ Tech Stack

| Technology              | Purpose                  |
| ----------------------- | ------------------------ |
| Node.js                 | Runtime Environment      |
| Express.js              | Backend API              |
| JavaScript / TypeScript | Application Development  |
| DeepEval                | LLM Evaluation Framework |
| OpenAI API              | Large Language Model     |

---


---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/sharmamegha123/ai-agent-deepeval.git
```

Navigate to the project

```bash
cd ai-agent-deepeval
```
Install dependencies

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root.

```env
ANTHROPIC_API_KEY=your_Anthropic_key
```

---

## ▶️ Run the Application

Start the development server

```bash
npm start
```

or

```bash
npm run dev
```


# 🧪 LLM Testing with DeepEval

This project uses **DeepEval** to automatically evaluate LLM responses against multiple quality dimensions.

### Metrics Implemented

* ✅ Answer Relevancy
* ✅ Correctness
* ✅ Faithfulness
* ✅ Contextual Precision *(if applicable)*
* ✅ Contextual Recall *(if applicable)*
* ✅ Hallucination Detection *(if applicable)*

These evaluations help ensure that generated responses are accurate, relevant, and grounded in the provided context.

---

## ▶️ Running DeepEval Tests

Execute all evaluation tests

```bash
npx deepeval test run
```

Run an individual evaluation

```bash
npx deepeval test run tests/deepeval/answerRelevancy.test.js
```

---

## 📊 Sample Output

```text
Metric: Answer Relevancy

Score: 1.0

Reason:
The response directly answers the user's question without introducing irrelevant information.

Passed: ✅
```

---

## 📈 Why DeepEval?

Unlike traditional unit testing, LLM evaluation measures the quality of generated responses.

DeepEval helps validate:

* Response relevance
* Factual correctness
* Hallucination detection
* Context utilization
* Overall response quality

This makes it easier to catch regressions as prompts, models, or application logic evolve.


---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

---


Senior QA Engineer | API Testing | Playwright | AI Testing | LLM Evaluation | Contract Testing | Automation Framework Development
