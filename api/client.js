import sanityClient from '@sanity/client';
import dotenv from "dotenv";

dotenv.config();

export default sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-05-14',
    useCdn: false,
    token: process.env.REACT_APP_SANITY_TOKEN,
});