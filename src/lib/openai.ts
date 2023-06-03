import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import { config } from "../config";
import fs from "fs"

const configuration = new Configuration({
  apiKey: config.openAI.key,
});

export const openai = new OpenAIApi(configuration);

export async function completion(
  messages: ChatCompletionRequestMessage[]
): Promise<string | undefined> {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 0,
      max_tokens: 256,
      messages,
    });
    
    return response.data.choices[0].message?.content;
  }
  catch (err: Error | any) {
    fs.appendFile(err?.message, "./log.txt", function (err) {
      if (err) console.log(err);
    });
    return "Erro ao comunicar com o servidor"
  } 
}
