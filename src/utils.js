const randomNumber = Math.floor(Math.random() * (8 - 6 + 1)) + 6;
const url = "https://word-generator2.p.rapidapi.com/?length=8";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "0371ac2013msh9ccf8f882d59bfdp16f550jsnbfdacdb321e3",
    "x-rapidapi-host": "word-generator2.p.rapidapi.com",
  },
};

export const getRandomWord = async () => {
  try {
    const response = await fetch(url, options);
    const result = JSON.parse(await response.text());
    return result.body[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};
