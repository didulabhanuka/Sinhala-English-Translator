const axios = require("axios");

// Define the base URL of your Flask API
const baseUrl = "http://localhost:5000";

// Function to extract keywords from Sinhala text
export const keywordExtractSinhala = async (text) => {
  try {
    const response = await axios.post(`${baseUrl}/extract_keywords-sinhala`, {
      text,
    });
    return response.data.keywords;
  } catch (error) {
    throw error;
  }
};

// Function to extract keywords from English text
export const keywordExtractEnglish = async (text) => {
  try {
    const response = await axios.post(`${baseUrl}/extract_keywords`, { text });
    return response.data.keywords;
  } catch (error) {
    throw error;
  }
};
