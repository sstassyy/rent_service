import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCity } from '../../store/action';
import { RootState } from '../../store/index';

const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const CityList: React.FC = () => {
  const dispatch = useDispatch();
  const currentCity = useSelector((state: RootState) => state.city);

  return (
    <ul>
      {cities.map((city) => (
        <li
          key={city}
          style={{ fontWeight: city === currentCity ? 'bold' : 'normal', cursor: 'pointer' }}
          onClick={() => dispatch(changeCity(city))}
        >
          {city}
        </li>
      ))}
    </ul>
  );
};

export default CityList;
