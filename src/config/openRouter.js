import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
    apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
    defaultHeaders: {
        'HTTP-Referer': 'http://localhost:5173', // Optional. Site URL for rankings on openrouter.ai.
        'X-Title': 'ELEGANCE NEXUS STORE', // Optional. Site title for rankings on openrouter.ai.
    },
});

export const runner = async (model, messages) => {
    return await openRouter.chat.send({
        model: model,
        messages: messages,
    });
};