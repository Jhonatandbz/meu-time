// 'd4c4a53abe5002a0227a38cd3c41b579';
export const API_URL = 'https://v3.football.api-sports.io/';

let API_KEY = '';

export const getApiKey = (): string => {
  return API_KEY;
};

export const setApiKey = (newApiKey: string): void => {
    API_KEY = newApiKey;
};