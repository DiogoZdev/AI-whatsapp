# WhatsApp Automated Response with Artificial Intelligence

This is a Node.js application built with TypeScript that allows you to create an automated WhatsApp response system using the Venom Bot library and integrate it with the OpenAI API for artificial intelligence capabilities.

## Prerequisites

Before getting started, make sure you have the following installed on your machine:

- Node.js (v14 or higher)
- NPM (Node Package Manager)

## Installation

1. Clone this repository to your local machine:
```
git clone https://github.com/your-username/your-repo.git
```

2. Navigate to the project directory:
```
cd your-repo
```

3. Install the dependencies:
```
npm install
```

## Configuration

1. Create a new OpenAI API key by signing up on the OpenAI website.
2. Open the `.env` file in the project root directory and add your OpenAI API key:

```
OPENAI_API_KEY=your-api-key
```

3. Customize the Venom Bot configuration in the `src/index.ts` file to suit your needs. You can set up different responses based on the received messages or implement your own logic.

## Usage

To start the application, run the following command:

```
npm start
```

The application will now listen for incoming WhatsApp messages and respond accordingly using the configured responses and the OpenAI API for artificial intelligence capabilities.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Resources

- [Venom Bot](https://github.com/orkestral/venom) - A library for creating WhatsApp bots in Node.js.
- [OpenAI API](https://openai.com/) - An artificial intelligence platform that provides various models and capabilities.

