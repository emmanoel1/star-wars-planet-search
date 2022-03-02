import { useEffect, useState } from 'react';
import planetsApi from '../services/planetsApi';

const useMountPlanets = () => {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    planetsApi().then((data) => setPlanets(data.results));
  }, []);

  return [planets, setPlanets];
};

export default useMountPlanets;
