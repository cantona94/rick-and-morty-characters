import { FC } from 'react';
import { useEffect, useState } from 'react';
import { axiosCharactersFromApi } from '../api/index';
import { IData } from '../types/types';
import {
  Character,
  FilterGender,
  FilterName,
  FilterSpecies,
  FilterStatus,
  FilterType,
  Popup,
} from '../components/index';
import styles from './Home.module.css';

export const Home: FC = () => {
  const [characters, setCharacters] = useState<IData | null>(null);
  const [error, setError] = useState<string>('');
  const [characterName, setCharacterName] = useState<string>('');
  const [characterGender, setCharacterGender] = useState<string>('');
  const [characterStatus, setCharacterStatus] = useState<string>('');
  const [characterSpecies, setCharacterSpecies] = useState<string>('');
  const [characterType, setCharacterType] = useState<string>('');
  const [visibility, setVisibility] = useState<boolean>(false);
  const [characterId, setCharacterId] = useState<string>('');

  const axiosCharacters = async (
    characterName: string,
    characterGender: string,
    characterStatus: string,
    characterSpecies: string,
    characterType: string
  ) => {
    await axiosCharactersFromApi(
      characterName,
      characterGender,
      characterStatus,
      characterSpecies,
      characterType
    )
      .then(({ data }) => setCharacters(data))
      .catch((err) => setError(err));
  };

  useEffect(() => {
    axiosCharacters(
      characterName,
      characterGender,
      characterStatus,
      characterSpecies,
      characterType
    );
  }, [
    characterName,
    characterGender,
    characterStatus,
    characterSpecies,
    characterType,
  ]);

  return (
    <>
      <header className={styles.header}>
        <h1>The Rick and Morty API</h1>
      </header>
      <FilterName
        characterName={characterName}
        setCharacterName={setCharacterName}
        setError={setError}
      />
      <div className={styles.filter}>
        <FilterGender
          characterGender={characterGender}
          setCharacterGender={setCharacterGender}
          setError={setError}
        />
        <FilterSpecies
          characterSpecies={characterSpecies}
          setCharacterSpecies={setCharacterSpecies}
          setError={setError}
        />
        <FilterStatus
          characterStatus={characterStatus}
          setCharacterStatus={setCharacterStatus}
          setError={setError}
        />
        <FilterType
          characterType={characterType}
          setCharacterType={setCharacterType}
          setError={setError}
        />
      </div>
      {!characters || error ? (
        <h1 className={styles.error}>Characters not found</h1>
      ) : (
        <div className={styles.characters}>
          {characters.results.map((character) => (
            <Character
              character={character}
              setVisibility={setVisibility}
              setCharacterId={setCharacterId}
              key={character.id}
            />
          ))}
        </div>
      )}
      {characterId && (
        <Popup
          characterId={characterId}
          setCharacterId={setCharacterId}
          visibility={visibility}
          setVisibility={setVisibility}
        />
      )}
    </>
  );
};
