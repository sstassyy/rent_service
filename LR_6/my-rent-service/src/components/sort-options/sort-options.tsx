import React from "react";
import { SortType } from "../../store/reducer";

type SortOptionsProps = {
  activeSorting: SortType;
  onChange: (newSorting: SortType) => void;
};

const SortOptions: React.FC<SortOptionsProps> = ({ activeSorting, onChange }) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <select
        className="places__sorting-type"
        value={activeSorting}
        onChange={(e) => onChange(e.target.value as SortType)}
      >
        {Object.values(SortType).map((sort) => (
          <option key={sort} value={sort}>
            {sort}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SortOptions;
