import { ChangeEvent, Dispatch, SetStateAction } from 'react';

const types = [
  'Human with antennae',
  'Human with ants in his eyes',
  'Fish-Person',
  'Cromulon',
  'Self-aware arm',
  'Mega Gargantuan',
  'Dummy',
  'Planet',
  'Omniscient being',
  'Pickle',
];

export interface IProps {
  characterType: string;
  setCharacterType: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<string>>;
}

export const FilterType = ({
  characterType,
  setCharacterType,
  setError,
}: IProps) => {
  const handleChangeType = (e: ChangeEvent<HTMLSelectElement>) => {
    setCharacterType(e.target.value);
    setError('');
  };
  return (
    <select
      className="filter__select"
      value={characterType}
      onChange={handleChangeType}
    >
      <option value="">All types</option>
      {types.map((type) => (
        <option value={type} key={type}>
          {type}
        </option>
      ))}
    </select>
  );
};
