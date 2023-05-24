const apiUrl = 'https://v3.football.api-sports.io/players/squads?team=33'; // Substitua "{endpoint}" pela rota desejada
const apiKey = 'd4c4a53abe5002a0227a38cd3c41b579';

const makeGetRequest = async () => {
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
      throw new Error('Erro na requisição'); // Trate o erro de acordo com a sua necessidade
    }
    const data = await response.json();

    // Criar um objeto Blob com o conteúdo do JSON
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });

    // Criar um objeto URL para o Blob
    const blobUrl = URL.createObjectURL(blob);

    // Criar um link de download
    const downloadLink = document.createElement('a');
    downloadLink.href = blobUrl;
    downloadLink.download = 'data.json'; // Nome do arquivo a ser salvo

    // Adicionar o link de download ao documento
    document.body.appendChild(downloadLink);

    // Simular o clique no link para iniciar o download
    downloadLink.click();

    // Remover o link de download do documento
    document.body.removeChild(downloadLink);
  } catch (error) {
    console.error(error); // Trate o erro de acordo com a sua necessidade
  }
};

export default makeGetRequest();