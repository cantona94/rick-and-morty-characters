import { ChangeEvent, Dispatch, SetStateAction } from 'react';

const genders = ['Female', 'Male', 'Genderless', 'Unknown'];

export interface IProps {
  characterGender: string;
  setCharacterGender: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<string>>;
}

export const FilterGender = ({
  characterGender,
  setCharacterGender,
  setError,
}: IProps) => {
  const handleChangeGender = (e: ChangeEvent<HTMLSelectElement>) => {
    setCharacterGender(e.target.value);
    setError('');
  };
  return (
    <select
      className="filter__select"
      value={characterGender}
      onChange={handleChangeGender}
    >
      <option value="">All genders</option>
      {genders.map((gender) => (
        <option value={gender} key={gender}>
          {gender}
        </option>
      ))}
    </select>
  );
};
