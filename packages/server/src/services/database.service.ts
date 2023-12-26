import AWS from 'aws-sdk';

function getInstance(): AWS.DynamoDB.DocumentClient {
    AWS.config.update({
        region: process.env.AWS_REGION,
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
    });

    return new AWS.DynamoDB.DocumentClient()
}