import { Client, Account, Databases,ID } from "appwrite";

const client = new Client();

client.setEndpoint(String(import.meta.env.VITE_APPWRITE_URL))
      .setProject(String(import.meta.env.VITE_APPWRITE_PROJECT))

export const account = new Account(client) 

export const database = new Databases(client,String(import.meta.env.VITE_APPWRITE_DATABASE))