import { Client, Account, Databases,ID } from "appwrite";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("669d2e1e000e04d40a92")

export const account = new Account(client) 

export const database = new Databases(client,"669d2e5200034d58b415")