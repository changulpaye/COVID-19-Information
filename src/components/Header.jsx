import React from "react";
import { NavLink, withRouter } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        Corona Information
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            {/* <NavLink className="nav-link" to="/dashboard">
              Dashboard
            </NavLink> */}
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register"></NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          {/* <AutoComplete
            value={country}
            field="country"
            onChange={e => setCountry(e.value)}
            suggestions={countrySuggestions}
            onClear={() => setFiltered(countries)}
            completeMethod={e => suggestCountries(e)}
          /> */}
          {/* <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Country"
            aria-label="Search"
          /> */}
        </form>
      </div>
    </nav>
  );
};

export default withRouter(Header);
