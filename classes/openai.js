import axios from 'axios';

// Azure config
const apiKey = 'd290c66624d84eecb49fe9948ab29041';
const resource = 'jini';
const deployment = 'base35';
const apiversion = '2024-02-01';
const endpoint = `https://${resource}.openai.azure.com/openai/deployments/${deployment}/chat/completions?api-version=${apiversion}`;

// Configure headers for the API request
const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'api-key': `${apiKey}`
    }
};

// Function to call the Azure OpenAI API
const openai = {
    call: (messages, options) => {
        // Set up the data for the API call
        const data = {
            messages: messages,
            max_tokens: options.max_token || 64
        };
        try {
            return axios.post(endpoint, data, config);
        } catch (error) {
            return null
        }
    }
};

export default openai;