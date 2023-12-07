
import aiplatform from '@google-cloud/aiplatform';
// Imports the Google Cloud Prediction service client
const {PredictionServiceClient} = aiplatform.v1;
// Import the helper module for converting arbitrary protobuf.Value objects.
const {helpers} = aiplatform;
// define default values
const def = {
    project: 'innovation-405302',
    location: 'it-gcp01-kansai-airports.me',
    publisher: 'google',
    model: 'text-bison@001',
    apiEndpoint: 'asia-northeast1-aiplatform.googleapis.com',
    parameters: {
        temperature: 0.2,
        maxOutputTokens: 256,
        topP: 0.95,
        topK: 40,
    }
};

export default class Vertex{
    constructor(preprompt, {project, location, publisher, model, parameters, apiEndpoint} = {}){
        this.preprompt = preprompt;
        this.project = project || def.project;
        this.location = location || def.location;
        this.publisher = publisher || def.publisher;
        this.model = model || def.model;
        this.apiEndpoint = apiEndpoint || def.apiEndpoint;
        this.parameters = {};
        Object.keys(def.parameters).forEach( p => {this.parameters[p] = (parameters||{})[p] || def.parameters[p]});
    }

    setPreprompt(preprompt){
        this.preprompt = preprompt;
    }

    addPreprompt(preprompt){
        this.prompt += preprompt;
    }

    async prompt(prompt){
        const endpoint = `projects/${this.project}/locations/${this.location}/publishers/${this.publisher}/models/${this.model}`;

        const final_prompt = {prompt: this.preprompt+' '+prompt };
        console.log(final_prompt)
        const instanceValue = helpers.toValue(final_prompt);
        const instances = [instanceValue];
        const parameters = helpers.toValue(this.parameters);

        const request = {
            endpoint,
            instances,
            parameters,
        };

        const predictionServiceClient = new PredictionServiceClient({apiEndpoint:this.apiEndpoint})

        const response = await predictionServiceClient.predict(request);

        return(response[0].predictions[0].structValue.fields);
        return response;
    }
}
