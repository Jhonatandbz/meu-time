import {API_KEY, API_URL} from "../apiConfig"
import {Props} from "../interfaces/get"

export const makeGetRequest = async (props: Props) => {

  const {endpoint} = props;
  var apiUrl = API_URL + `${endpoint}`;
  const apiKey = API_KEY;
  const headers = new Headers();
  headers.append('x-rapidapi-key', apiKey);
  headers.append('x-rapidapi-host', 'v3.football.api-sports.io');

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: headers,
      redirect: 'follow',
    });

    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    const data = await response.json();

    console.log(data)

    return data
    
  } catch (error) {
    console.error(error); 
  }
};
