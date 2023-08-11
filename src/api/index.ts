import axios from 'axios';
import { IData } from '../types/types';

export const axiosCharactersFromApi = (
  characterName: string,
  characterGender: string,
  characterStatus: string,
  characterSpecies: string,
  characterType: string
) => {
  return axios.get<IData>('https://rickandmortyapi.com/api/character', {
    params: {
      name: characterName,
      status: characterStatus,
      species: characterSpecies,
      type: characterType,
      gender: characterGender,
    },
  });
};
