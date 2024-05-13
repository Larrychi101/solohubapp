const { app } = require('@azure/functions');
const { CosmosClient } = require("@azure/cosmos");

const connectionString = process.env["CosmosDBConnectionString"];
const client = new CosmosClient(connectionString);
const database = client.database('solohubonboardingform');
const container = database.container('solohubapp01');

app.http('onboardingformapi', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Processing form submission`);

        // The form data is in the body of the request
        const formData = request.body;

        // Log the form data to the console
        context.log('Form data:', formData);

        // Save the form data to Cosmos DB
        const { resource: createdItem } = await container.items.create(formData);

        return { body: `Form submission received and stored with id: ${createdItem.id}` };
    }
});