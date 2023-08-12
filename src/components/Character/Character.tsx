import { Dispatch, SetStateAction } from 'react';
import { ICharacter } from '../../types/types';
import styles from './Character.module.css';

interface IProps {
  character: ICharacter;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  setCharacterId: Dispatch<SetStateAction<string>>;
}

export const Character = ({
  character,
  setVisibility,
  setCharacterId,
}: IProps) => {
  const handlerPopupOpen = () => {
    setCharacterId(String(character.id));
    setVisibility(true);
  };

  return (
    <div className={styles.card}>
      <img className={styles.img} alt="img" src={character.image} />
      <div className="">
        <h3 className={styles.text}>{character.name}</h3>
        <p className={styles.text}>Gender: {character.gender}</p>
        <p className={styles.text}>Species: {character.species}</p>
        <p className={styles.text}>Status: {character.status}</p>
        {character.type ? (
          <p className={styles.text}>Type: {character.type}</p>
        ) : (
          <p className={styles.text}></p>
        )}
        <button className={styles.button} onClick={handlerPopupOpen}>
          Подробно
        </button>
      </div>
    </div>
  );
};
