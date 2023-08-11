import { ChangeEvent } from 'react';
import styles from './FilterName.module.css';
import { Dispatch, SetStateAction } from 'react';

export interface IProps {
  characterName: string;
  setCharacterName: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<string>>;
}

export const FilterName = ({
  characterName,
  setCharacterName,
  setError,
}: IProps) => {
  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setCharacterName(e.target.value);
    setError('');
  };
  return (
    <form className={styles.search__form}>
      <input
        className={styles.web__search}
        type="text"
        placeholder="Search"
        name="name"
        value={characterName}
        onChange={handleChangeSearch}
      />
    </form>
  );
};
