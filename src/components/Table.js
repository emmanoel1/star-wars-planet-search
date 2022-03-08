import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { filteredPlanets } = useContext(PlanetsContext);

  return (
    <div className="table-container">
      <table
        className="
        table
        is-bordered
        is-hoverable
        has-background-success
        "
      >
        <thead className="thead">
          <tr className="tr">
            <th className="th">Name</th>
            <th className="th">Climate</th>
            <th className="th">Terrain</th>
            <th className="th">Gravity</th>
            <th className="th">Surface Water</th>
            <th className="th">Rotation Period</th>
            <th className="th">Orbital Period</th>
            <th className="th">Diameter</th>
            <th className="th">Population</th>
            <th className="th">Films</th>
            <th className="th">Created</th>
            <th className="th">Edited</th>
            <th className="th">Url</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {filteredPlanets !== undefined ? (
            filteredPlanets.map(
              ({
                name,
                climate,
                terrain,
                gravity,
                surface_water: surfaceWater,
                rotation_period: rotationPeriod,
                orbital_period: orbitalPeriod,
                diameter,
                population,
                films,
                created,
                edited,
                url,
              }) => (
                <tr key={ name } className="tr">
                  <td className="td">{name}</td>
                  <td className="td">{climate}</td>
                  <td className="td">{terrain}</td>
                  <td className="td">{gravity}</td>
                  <td className="td">{surfaceWater}</td>
                  <td className="td">{rotationPeriod}</td>
                  <td className="td">{orbitalPeriod}</td>
                  <td className="td">{diameter}</td>
                  <td className="td">{population}</td>
                  <td className="td">{films}</td>
                  <td className="td">{created}</td>
                  <td className="td">{edited}</td>
                  <td className="td">{url}</td>
                </tr>
              ),
            )
          ) : (
            <tr>{}</tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
