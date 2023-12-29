import AWS from 'aws-sdk';
import crypto from 'crypto'

const ROOMS_TABLE = 'rooms'
const VOTES_TABLE = 'votes'

function getInstance(): AWS.DynamoDB.DocumentClient {
    AWS.config.update({
        region: process.env.AWS_REGION,
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
    });

    return new AWS.DynamoDB.DocumentClient()
}

export async function createRoom(data: any) {
    const instance = getInstance()

    const params = {
        TableName: ROOMS_TABLE,
        Item: {
            id: crypto.randomUUID(),
            expiration: Date.now() + 1000 * 60 * 60 * 24,
            ...data
        },
        returnValues: 'UPDATED_NEW'
    }
    
    const returned = await instance.put(params).promise()
    return returned.Attributes
}