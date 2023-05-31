import {API_KEY, API_URL} from "./apiConfig"
import {Props} from "../interfaces/AppInterfaces/get"

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

    // const jsonData = JSON.stringify(data);

    // // Criar um blob com a string JSON
    // const blob = new Blob([jsonData], { type: "application/json" });

    // // Criar uma URL temporária para o blob
    // const url = URL.createObjectURL(blob);

    // // Criar um link de download
    // const link = document.createElement("a");
    // link.href = url;
    // link.download = "data.json";
    // link.click();

    // // Limpar a URL temporária
    // URL.revokeObjectURL(url);

    return data
    
  } catch (error) {
    console.error(error); 
  }
};
