import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { changeSortType, SortType } from "../../store/reducer"; // ✅ Импортируем `SortType` из `reducer.ts`

const SortOptions = (): React.ReactElement => {
  const dispatch = useDispatch();
  const sortType = useSelector((state: RootState) => state.sortType);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeSortType(e.target.value as SortType)); // ✅ Теперь всё совпадает
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <select className="places__sorting-type" value={sortType} onChange={handleSortChange}>
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
