import { ChangeEvent, Dispatch, SetStateAction } from 'react';

const species = ['Human', 'Alien', 'Humanoid', 'Unknown'];

export interface IProps {
  characterSpecies: string;
  setCharacterSpecies: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<string>>;
}

export const FilterSpecies = ({
  characterSpecies,
  setCharacterSpecies,
  setError,
}: IProps) => {
  const handleChangeSpecies = (e: ChangeEvent<HTMLSelectElement>) => {
    setCharacterSpecies(e.target.value);
    setError('');
  };
  return (
    <select
      className="filter__select"
      value={characterSpecies}
      onChange={handleChangeSpecies}
    >
      <option value="">All species</option>
      {species.map((specie) => (
        <option value={specie} key={specie}>
          {specie}
        </option>
      ))}
    </select>
  );
};
