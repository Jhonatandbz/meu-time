import {API_KEY, API_URL} from "../apiConfig"

interface Props{
  endpoint: string;
  query: string
  select: string
}

export const makeGetRequest = async (props: Props) => {

  const {endpoint, query, select} = props;
  var apiUrl = API_URL + `${endpoint}`;
  const apiKey = API_KEY;
  const headers = new Headers();
  headers.append('x-rapidapi-key', apiKey);
  headers.append('x-rapidapi-host', 'v3.football.api-sports.io');

  if(query){
    apiUrl = `${apiUrl}?${query}=${encodeURIComponent(select)}`
  }

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

    return data
    
  } catch (error) {
    console.error(error); 
  }
};
