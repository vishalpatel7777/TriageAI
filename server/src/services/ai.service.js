import  ai  from "../config/gemini.js";
import  SYSTEM_PROMPT  from "../prompts/system.prompt.js";
import { extractJson } from "../utils/extractJson.js";
import { triageResponseSchema } from "../schemas/triage.schema.js";
import ApiError from "../utils/ApiError.js";

const MODELS = [
  "gemini-2.5-flash-lite",
  "gemini-2.5-flash",
];

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const analyzeCustomerMessage = async (message) => {
  let lastError;

  for (const model of MODELS) {
    console.log(`\nTrying model: ${model}`);

    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        console.log(`Attempt ${attempt}/3`);

        const response = await ai.models.generateContent({
          model,
          contents: `${SYSTEM_PROMPT}

Customer Message:
${message}`,
        });

        const json = extractJson(response.text);

        console.log(`Success using ${model}`);

        return triageResponseSchema.parse(json);

      } catch (error) {
        lastError = error;

        const errorMessage =
          error?.message || JSON.stringify(error);

        console.error(errorMessage);

        const retryable =
          errorMessage.includes("503") ||
          errorMessage.includes("429") ||
          errorMessage.includes("UNAVAILABLE") ||
          errorMessage.includes("RESOURCE_EXHAUSTED");

        if (!retryable) {
          throw new ApiError(
            500,
            errorMessage
          );
        }

        if (attempt < 3) {
          console.log(
            `Retrying ${model} in ${attempt * 1.5}s...`
          );

          await sleep(attempt * 1500);
        }
      }
    }

    console.log(`${model} unavailable. Trying next model...\n`);
  }

  throw new ApiError(
    503,
    "All AI models are temporarily unavailable. Please try again later."
  );
};