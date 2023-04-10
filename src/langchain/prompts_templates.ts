import { PromptTemplate } from "langchain/prompts";

export const PromptTemplates = {
    async run(product: string, input?: input) {
        const template = "What is a good name for a company that makes {product}?";
        const templateTwo = `${input?.query} ${input?.option}?`;

        // const prompt = new PromptTemplate({
        //     template: template,
        //     inputVariables: ["product"],
        // });
        const prompt = new PromptTemplate({
            template: template,
            inputVariables: [`${input?.option} : ${input?.value}`],
        });
        const res = await prompt.format({product: product});
        console.log(res);
    },

    async createPromptTemplate(iCreateTemplate: ICreateTemplate) {
        try {
            const templateInputVar = {
                iCreateTemplate
            }
            const newPrompt = new PromptTemplate({
                template: iCreateTemplate.question,
                inputVariables: iCreateTemplate.variables
            })
            return await newPrompt.format(templateInputVar)

        } catch (err) {
            return err
        }
    }
}


interface ICreateTemplate {
    question: string
    variables: string[],
}


interface input {
    query: string,
    option: string,
    value: string,
}