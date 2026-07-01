import fs from "fs";

const tickets = JSON.parse(
  fs.readFileSync("../database/sampleTickets.json", "utf8")
);

const API = "http://localhost:5000/api/v1/triage";

async function runTests() {
  console.log("\n🚀 Running AI Evaluation Suite\n");

  let passed = 0;
  let failed = 0;
  let totalConfidence = 0;
  let totalResponseTime = 0;

  for (const [index, ticket] of tickets.entries()) {
    try {
      const start = performance.now();

      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: ticket.message,
        }),
      });

      const end = performance.now();

      const responseTime = Math.round(end - start);

      const json = await response.json();

      if (!response.ok) {
        failed++;

        console.log("------------------------------------------------");
        console.log(`❌ Test ${index + 1}`);
        console.log("API Error:", json.message);
        console.log("------------------------------------------------\n");

        continue;
      }

      const result = json.data;

      const success =
        result.category.toLowerCase() ===
        ticket.expectedCategory.toLowerCase();

      if (success) {
        passed++;
      } else {
        failed++;
      }

      totalConfidence += result.confidence;
      totalResponseTime += responseTime;

      console.log("------------------------------------------------");
      console.log(`🧪 Test ${index + 1}`);

      console.log("\n📩 Message");
      console.log(ticket.message);

      console.log("\nExpected Category :", ticket.expectedCategory);
      console.log("Predicted Category:", result.category);

      console.log("\nPriority :", result.priority);
      console.log("Human Review :", result.needsHuman ? "Yes" : "No");

      console.log(
        "Confidence :",
        `${(result.confidence * 100).toFixed(1)}%`
      );

      console.log(
        "Response Time :",
        `${responseTime} ms`
      );

      console.log(
        "\nResult:",
        success ? "✅ PASS" : "❌ FAIL"
      );

      console.log("------------------------------------------------\n");

    } catch (error) {
      failed++;

      console.log("------------------------------------------------");
      console.log(`❌ Test ${index + 1}`);
      console.log(error.message);
      console.log("------------------------------------------------\n");
    }
  }

  const accuracy = (
    (passed / tickets.length) *
    100
  ).toFixed(2);

  const avgConfidence = (
    (totalConfidence / tickets.length) *
    100
  ).toFixed(2);

  const avgResponse = (
    totalResponseTime / tickets.length
  ).toFixed(0);

  console.log("\n================ FINAL REPORT ================\n");

  console.log(`Total Tests       : ${tickets.length}`);
  console.log(`Passed            : ${passed}`);
  console.log(`Failed            : ${failed}`);
  console.log(`Accuracy          : ${accuracy}%`);
  console.log(`Avg Confidence    : ${avgConfidence}%`);
  console.log(`Avg Response Time : ${avgResponse} ms`);

  console.log("\n==============================================\n");
}

runTests();