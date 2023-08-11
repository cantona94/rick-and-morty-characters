import axios from 'axios';
import { IData } from '../types/types';

export const axiosCharactersFromApi = () => {
  return axios.get<IData>('https://rickandmortyapi.com/api/character', {
    params: {},
  });
};
