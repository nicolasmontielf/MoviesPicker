import AWS from 'aws-sdk';
import crypto from 'crypto'
import { Room } from '@movies/common/types';

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

export async function createRoom(genres: string): Promise<Room> {
    const instance = getInstance()

    const item = {
        id: crypto.randomUUID(),
        expiration: Date.now() + 1000 * 60 * 60 * 24,
        genres: genres
    }
    
    await instance.put({
        TableName: ROOMS_TABLE,
        Item: item,
    }).promise()

    return item;
}

export async function getRoom(id: string): Promise<Room | undefined> {
    const instance = getInstance()

    const { Item } = await instance.get({
        TableName: ROOMS_TABLE,
        Key: {
            id
        }
    }).promise()

    return Item as Room | undefined;
}