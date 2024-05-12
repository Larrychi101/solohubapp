const { app } = require('@azure/functions');

app.http('onboardingformapi', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Processing form submission`);

        // The form data is in the body of the request
        const formData = request.body;

        // Log the form data to the console
        context.log('Form data:', formData);

        // Process the form data here, e.g. save it to a database or send an email

        return { body: `Form submission received` };
    }
});