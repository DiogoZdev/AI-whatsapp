import { Message, Whatsapp, create } from "venom-bot";
import { completion } from "./lib/openai";
import { ChatCompletionRequestMessage } from "openai";

create({
  session: "smart-node",
  disableWelcome: true,
})
  .then(async (client: Whatsapp) => await start(client))
  .catch((err) => console.error(err));

async function start(client: Whatsapp) {
  client.onMessage(async (message: Message) => {
    if (!message.body || message.isGroupMsg) return;

    console.log("message: ", message.body);

    const response =
      (await completion(buildMessageBody(message.body))) || "tem que ver isso aí...";

    await client.sendText(message.from, response);
  });
}

function buildMessageBody(content: string): ChatCompletionRequestMessage[] {
  return [
    {
      role: "user",
      content,
    },
  ];
}
