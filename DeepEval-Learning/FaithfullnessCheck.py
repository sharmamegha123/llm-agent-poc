import requests

from dotenv import load_dotenv

from deepeval.models import AnthropicModel
from deepeval.metrics import FaithfulnessMetric
from deepeval.test_case import LLMTestCase

load_dotenv()

response = requests.post(
    "http://localhost:3000/chat",
    json={
        "prompt": "What's my balance for account 123456?"
    }
)

answer = response.json()["answer"]

print(answer)

judge = AnthropicModel(
    model="claude-sonnet-4-5"
)

test_case = LLMTestCase(
    input="What's my balance for account 123456?",
    actual_output=answer,
    retrieval_context=[
        '{"accountNumber":"123456","balance":25000}'
    ]
)

metric = FaithfulnessMetric(
    threshold=0.9,
    model=judge
)

metric.measure(test_case)

print("Score:", metric.score)
print("Reason:", metric.reason)
print("Passed:", metric.is_successful())