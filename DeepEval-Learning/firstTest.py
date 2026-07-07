import requests 
from deepeval import assert_test
from deepeval.test_case import LLMTestCase
from deepeval.metrics import AnswerRelevancyMetric
from dotenv import load_dotenv
from deepeval.models import AnthropicModel

load_dotenv()
response = requests.post(
    "http://localhost:3000/chat",
    json={
        "prompt": "What is the weather in Delhi?"
    }
)

answer = response.json()["answer"]

print(answer)

test_case = LLMTestCase(
    input="whats the weather in Delhi ",  
    actual_output=answer)

judge = AnthropicModel(
    model="claude-sonnet-4-5"
)

metric = AnswerRelevancyMetric(
    threshold=0.7,
    model=judge
)
# assert_test(test_case, [metric])
score = metric.measure(test_case)

print("Score:", score)
print("Reason:", metric.reason)
print("Passed:", metric.is_successful())

    