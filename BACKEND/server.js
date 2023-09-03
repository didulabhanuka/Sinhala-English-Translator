const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb Connection success!");
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

app.get('/languages', async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
    headers: {
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': 'baf89a1052msh16f4f2dfb0a11b5p1945e4jsn4c7e1762fc58',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    },
  }

  try {
    const response = await axios.request(options);
    const arrayOfLanguages = Object.keys(response.data.data.languages).map((key) => ({
      language: key,
      name: response.data.data.languages[key],
    }));
    res.status(200).json(arrayOfLanguages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

app.get('/translation', async (req, res) => {
  const { textToTranslate, outputLanguage, inputLanguage } = req.query;

  const options = {
    method: 'POST',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': 'baf89a1052msh16f4f2dfb0a11b5p1945e4jsn4c7e1762fc58',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    },
    data: `q=${textToTranslate}&target=${outputLanguage}&source=${inputLanguage}`,
  };

  try {
    const response = await axios.request(options);
    res.status(200).json(response.data.data.translations[0].translatedText);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});
