import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import { config } from "../config";
import fs from "fs"

const configuration = new Configuration({
  apiKey: config.openAI.key,
});

const openai = new OpenAIApi(configuration);

const history: ChatCompletionRequestMessage[] = [];

export async function completion(
  messages: ChatCompletionRequestMessage[]
): Promise<string | undefined> {

  history.push({
    role: "user",
    content: messages[0].content,
  })

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 0,
      messages: history,
    });

    history.push({
      role: "assistant",
      content: response.data.choices[0].message?.content || "",
    })
    
    return response.data.choices[0].message?.content;
  }
  catch (err: Error | any) {
    fs.appendFile("./log.txt", err?.message, function (err) {
      if (err) console.log(err);
    });
    return "Erro ao comunicar com o servidor"
  } 
}
