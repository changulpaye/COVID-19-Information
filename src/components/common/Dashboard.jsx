import React, { useEffect, useState } from "react";
import { getAllPandemicData, getPandemicData } from "../../services/ApiSerivce";
import CountryTable from "../CountryTable";
import LoadingOverlay from "react-loading-overlay";

const Dashboard = () => {
  const [filtered, setFiltered] = useState([]);
  const [countries, setCountries] = useState([]);
  const [worldData, setWorldData] = useState({
    cases: "",
    deaths: "",
    recovered: "",
  });

  useEffect(() => {
    fetchPandemicData();
  }, []);

  const fetchPandemicData = async () => {
    const { data: worldData } = await getAllPandemicData();
    const { data } = await getPandemicData();
    data.sort(function(a, b) {
      return b.cases - a.cases;
    });
    setWorldData(worldData);
    setCountries(data);
    setFiltered(data);
  };

  const handleSearch = async query => {
    if (!query) {
      setFiltered(countries);
    }
    const filtered = countries.filter(data =>
      data.country.toLowerCase().startsWith(query.toLowerCase())
    );
    setFiltered(filtered);
  };

  return (
    <LoadingOverlay
      active={!countries.length}
      spinner
      text="Loading information...">
      <div className="full-height ">
        <div className="row ml-3 mr-3 font-weight-bold">
          <div className="col-4 p-2  ">
            <div className="alert alert-warning text-center">
              TOTAL CASES {worldData.cases.toLocaleString()}
            </div>
          </div>
          <div className="col-4 p-2 ">
            <div className="alert alert-danger text-center">
              TOTAL DEATHS {worldData.deaths.toLocaleString()}
            </div>
          </div>
          <div className="col-4 p-2 ">
            <div className="alert alert-success text-center">
              TOTAL CURED {worldData.recovered.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="row  ml-2 mr-2">
          <div className="col-md-4">
            <div className="form-group">
              <div className="form-text">
                <input
                  className="form-control"
                  type="text"
                  name="search"
                  placeholder="Search"
                  id="search"
                  onChange={e => handleSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row ml-2 mr-2">
          <div className="col-12">
            <CountryTable country={filtered} />
          </div>
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default Dashboard;
