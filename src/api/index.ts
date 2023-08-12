import axios from 'axios';
import { ICharacter, IData } from '../types/types';

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

export const axiosCharacterFromApi = (characterId: string) => {
  return axios.get<ICharacter>(
    `https://rickandmortyapi.com/api/character/${characterId}`
  );
};
