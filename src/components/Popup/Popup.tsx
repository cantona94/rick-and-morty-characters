import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from './Popup.module.css';
import { axiosCharacterFromApi } from '../../api';
import { ICharacter } from '../../types/types';

interface IProps {
  characterId: string;
  setCharacterId: Dispatch<SetStateAction<string>>;
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
}

export const Popup = ({
  characterId,
  setCharacterId,
  visibility,
  setVisibility,
}: IProps) => {
  const [character, setCharacter] = useState<ICharacter | null>(null);
  const [error, setError] = useState<string>('');

  const handlerPopupClose = () => {
    setVisibility(false);
    setCharacter(null);
    setCharacterId('');
    setError('');
  };

  const axiosCharacter = async (characterId: string) => {
    await axiosCharacterFromApi(characterId)
      .then(({ data }) => setCharacter(data))
      .catch((err) => setError(err));
  };

  useEffect(() => {
    axiosCharacter(characterId);
  }, [characterId]);

  if (!character || error) {
    return <h2>Character not found</h2>;
  }

  return (
    <div
      style={{
        visibility: visibility ? 'visible' : 'hidden',
        opacity: visibility ? '1' : '0',
      }}
      className={styles.overlay}
    >
      <div className={styles.popup}>
        <span className={styles.close} onClick={handlerPopupClose}>
          &times;
        </span>
        <img alt="img" src={character.image} />
        <h2>{character.name}</h2>
        <div className={styles.content}>Gender: {character.gender}</div>
        <div className={styles.content}>Species: {character.species}</div>
        <div className={styles.content}>Status: {character.status}</div>
        <div className={styles.content}>
          Type: {character.type ? character.type : 'Missing'}
        </div>
        <div className={styles.content}>
          Location: {character.location.name}
        </div>
        <div className={styles.content}>
          Number of episodes: {character.episode.length}
        </div>
      </div>
    </div>
  );
};
