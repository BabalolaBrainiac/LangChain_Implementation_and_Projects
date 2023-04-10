import { OpenAI } from "langchain/llms/openai";

export const Openai = {
  async RunBasicCommand(question: string) {
    const model = new OpenAI({openAIApiKey: process.env.OPENAI_API_KEY,  temperature: 0.1})
    const res = await model.call(question)
    console.log(res)
  }
}