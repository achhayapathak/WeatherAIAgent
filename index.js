import readlineSync from "readline-sync";
import getAIResponse from "./helpers/getAIResponse.js";
import getWeatherDetails from "./helpers/getWeatherDetails.js";

const tools = {
  getWeatherDetails: getWeatherDetails,
};
const messages = [];

while (true) {
  const query = readlineSync.question(">> ");
  if (query === "exit") {
    break;
  }

  const message = {
    role: "user",
    parts: [
      {
        text: JSON.stringify({
            type: "user",
            user: query,
          }),
      },
    ],
  };

  messages.push(message);

  while (true) {
    const result = await getAIResponse(messages);

    try {
      const call = JSON.parse(result);

      if (call.type == "output") {
        console.log(`🌀: ${call.output}`);
        break;
      } else if (call.type === "action") {
        const func = tools[call.function];
        const observation = await func(call.input);
        const obsMessage = {
          role: "model",
          parts: [
            {
              text: JSON.stringify({ type: "observation", observation: observation }),
            },
          ],
        };
        messages.push(obsMessage);
      } 
      const nextMessage = {
        role: "model",
        parts: [
          {
            text: result,
          },
        ],
      };

      messages.push(nextMessage);
    } catch (e) {
      console.error("Failed to parse JSON:", e);
      console.error("Result:", result);
      break;
    }
  }
}
