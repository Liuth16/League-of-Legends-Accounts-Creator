const axios = require('axios');

const requestRiotSignup = async (
  token,
  username,
  password,
  email,
  region,
  birth,
) => {
  const requestBody = {
    username,
    password,
    confirm_password: password,
    date_of_birth: birth,
    email,
    tou_agree: true,
    newsletter: false,
    region,
    campaign: 'league_of_legends',
    locale: 'en',
    token: `Captcha ${token}`,
  };

  // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = 'https://signup-api.leagueoflegends.com/v1/accounts';
  const response = await axios
    .post(apiUrl, requestBody, {
      headers: { 'Content-Type': 'application/json' },
    })
    .catch(err => err);

  return response;
};

export default requestRiotSignup;
