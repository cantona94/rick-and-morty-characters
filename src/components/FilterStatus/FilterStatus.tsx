import { ChangeEvent, Dispatch, SetStateAction } from 'react';

const statuses = ['Alive', 'Dead', 'Unknown'];

export interface IProps {
  characterStatus: string;
  setCharacterStatus: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<string>>;
}

export const FilterStatus = ({
  characterStatus,
  setCharacterStatus,
  setError,
}: IProps) => {
  const handleChangeStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    setCharacterStatus(e.target.value);
    setError('');
  };
  return (
    <select
      className="filter__select"
      value={characterStatus}
      onChange={handleChangeStatus}
    >
      <option value="">All status</option>
      {statuses.map((status) => (
        <option value={status} key={status}>
          {status}
        </option>
      ))}
    </select>
  );
};
