const config = {
  appWriteUrl: String(import.meta.env.VITE_APPWRITE_API_ENDPOINT_URL),
  appWiteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appWiteDatabasetId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appWiteCollectiontId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default config;
