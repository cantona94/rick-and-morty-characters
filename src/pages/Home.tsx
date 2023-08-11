import { FC } from 'react';
import { useEffect, useState } from 'react';
import { axiosCharactersFromApi } from '../api/index';
import { IData } from '../types/types';
import { Character } from '../components/index';
import styles from './Home.module.css';

export const Home: FC = () => {
  const [characters, setCharacters] = useState<IData | null>(null);
  const [error, setError] = useState<string>('');

  const axiosCharacters = async () => {
    await axiosCharactersFromApi()
      .then(({ data }) => setCharacters(data))
      .catch((err) => setError(err));
  };

  useEffect(() => {
    axiosCharacters();
  }, []);

  return (
    <>
      <header className={styles.header}>
        <h1>The Rick and Morty API</h1>
      </header>
      {!characters || error ? (
        <h1 className={styles.error}>Characters not found</h1>
      ) : (
        <div className={styles.characters}>
          {characters.results.map((character) => (
            <Character character={character} key={character.id} />
          ))}
        </div>
      )}
    </>
  );
};
