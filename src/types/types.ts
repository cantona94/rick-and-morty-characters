export interface ICharacter {
  id: number;
  name: string;
  gender: string;
  status: string;
  type: string;
  species: string;
  image: string;
}

export interface IData {
  results: ICharacter[];
}