// const express = require('express');
// const router = express.Router();
// const axios = require('axios');

// // Get Supported Languages
// router.get('/languages', async (req, res) => { // Changed from POST to GET
//   const options = {
//     headers: {
//       'x-rapidapi-host': process.env.RAPID_API_HOST,
//       'x-rapidapi-key': process.env.RAPID_API_KEY,
//     },
//   };

//   try {
//     const response = await axios.get(
//       'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
//       options
//     );
//     const arrayOfData = Object.keys(response.data.data).map(
//       (key) => response.data.data[key]
//     );
//     res.status(200).json(arrayOfData);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: err });
//   }
// });

// router.post('/translation', async (req, res) => {
//   const { textToTranslate, outputLanguage, inputLanguage } = req.body;

//   const options = {
//     params: {
//       q: textToTranslate,
//       target: outputLanguage,
//       source: inputLanguage,
//     },
//     headers: {
//       'Accept-Encoding': 'application/gzip',
//       'X-RapidAPI-Key': 'baf89a1052msh16f4f2dfb0a11b5p1945e4jsn4c7e1762fc58',
//       'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
//     },
//   };

//   try {
//     const response = await axios.post(
//       'https://google-translate1.p.rapidapi.com/language/translate/v2',
//       {},
//       options
//     );
//     res.status(200).json(response.data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: err });
//   }
// });

// module.exports = router;
