import { Client, Databases, Account } from 'appwrite';

export const PROJECT_ID = '659507c20ae7a69e0bb2'
export const DATABASE_ID = '659527366318e20673d2'
export const COLLECTION_ID_MESSAGES = '6595274f2f96ce27af5e'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('659507c20ae7a69e0bb2');

export const databases = new Databases(client);
export const account = new Account(client);
export default client; 