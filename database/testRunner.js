import fs from "fs";

const tickets = JSON.parse(
  fs.readFileSync("../database/sampleTickets.json", "utf8")
);

const API = "http://localhost:5000/api/v1/triage";

async function runTests() {
  console.log("\n🚀 Running AI Triage Tests...\n");

  let passed = 0;

  for (const ticket of tickets) {
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: ticket.message,
        }),
      });

      const json = await response.json();

      if (!response.ok) {
        console.log("❌ API Error:", json.message);
        continue;
      }

      const result = json.data;

      const success =
        result.category.toLowerCase() ===
        ticket.expectedCategory.toLowerCase();

      if (success) passed++;

      console.log("--------------------------------------------------");
      console.log("📩 Message:");
      console.log(ticket.message);

      console.log("\n✅ Expected :", ticket.expectedCategory);
      console.log("🤖 Predicted:", result.category);
      console.log("🎯 Priority :", result.priority);
      console.log("📊 Confidence:", result.confidence);

      console.log(success ? "\n✅ PASS" : "\n❌ FAIL");
      console.log("--------------------------------------------------\n");

    } catch (error) {
      console.log("❌ Request Failed");
      console.error(error.message);
    }
  }

  console.log(`\n🏁 Accuracy: ${passed}/${tickets.length}\n`);
}

runTests();