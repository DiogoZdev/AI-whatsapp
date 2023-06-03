import { Message, Whatsapp, create } from "venom-bot";

create({
  session: "smart-node",
  disableWelcome: true,
})
  .then(async (client: Whatsapp) => await start(client))
  .catch((err) => console.error(err));

  async function  start(client: Whatsapp) {
    client.onMessage( async (message: Message) => {
        if (!message.body || message.isGroupMsg) return

        console.log(message.from, ": ", message.body)
         
        const response = 'Bot em teste no momento, não se preocupe, volto logo'

        await client.sendText(message.from, response)
    })
  }