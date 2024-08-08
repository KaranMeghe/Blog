import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId);

    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appWiteDatabasetId,
        config.appWiteCollectiontId,
        ID.unique(),
        {
          title,
          slug,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(
    documentId,
    { title, slug, content, featuredImage, status }
  ) {
    try {
      return await this.databases.updateDocument(
        config.appWiteDatabasetId,
        config.appWiteCollectiontId,
        documentId,
        {
          title,
          slug,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async deletePost(documentId) {
    try {
      await this.databases.deleteDocument(
        config.appWiteDatabasetId,
        config.appWiteCollectiontId,
        documentId
      );
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }

  async getPost(documentId) {
    try {
      return await this.databases.getDocument(
        config.appWiteDatabasetId,
        config.appWiteCollectiontId,
        documentId
      );
    } catch (error) {
      throw error;
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appWiteDatabasetId,
        config.appWiteCollectiontId,
        queries
      );
    } catch (error) {
      throw error;
      return false;
    }
  }

  //   file Upload service
  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      throw error;
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.storage.getFilePreview(config.appwriteBucketId, fileId);
  }
}

const service = new Service();

export default service;
