import { Card } from "primereact/card";
import React from "react";
const CountryInfo = ({ country }) => {
  return (
    <div className="card-container">
      <Card>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td colSpan={2}>
                <div>
                  <h3 className="main-header"> {country.country} </h3>
                </div>
              </td>
            </tr>

            <tr className="font-weight-bolder">
              <td> Cases </td>
              <td>{country.cases}</td>
            </tr>
            <tr className="font-weight-bolder">
              <td> Today Cases </td>
              <td>{country.cases}</td>
            </tr>
            <tr className="text-danger font-weight-bolder ">
              <td>Total Deaths </td>
              <td>{country.deaths}</td>
            </tr>

            <tr>
              <td className="font-weight-bolder">Today Deaths</td>
              <td>{country.todaydeaths}</td>
            </tr>

            <tr className="font-weight-bolder">
              <td> Recovered </td>
              <td>{country.recovered}</td>
            </tr>

            <tr className="font-weight-bolder">
              <td> Critical </td>
              <td>{country.critical}</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default CountryInfo;
