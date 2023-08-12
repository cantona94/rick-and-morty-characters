interface ILocation {
  name: string;
  url: string;
}

export interface ICharacter {
  id: number;
  name: string;
  gender: string;
  status: string;
  type: string;
  species: string;
  image: string;
  location: ILocation;
  episode: string[];
}

export interface IData {
  results: ICharacter[];
}
