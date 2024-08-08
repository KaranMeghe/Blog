const config = {
  appWriteUrl: String(import.meta.env.VITE_APPWRITE_API_ENDPOINT_URL),
  appWriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appWriteDatabasetId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appWriteCollectiontId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appWriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default config;
