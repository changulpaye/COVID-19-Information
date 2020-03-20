import { Column } from "primereact/components/column/Column";
import { DataTable } from "primereact/datatable";
import React from "react";
import { Link } from "react-router-dom";
const CountryTable = ({ country: countries }) => {
  const valueTemplate = (rowData, column) => {
    return (
      <span className="large-font">
        {rowData[column.field].toLocaleString()}
      </span>
    );
  };
  const newCasesTemplate = (rowData, column) =>
    rowData.todayCases !== 0 ? (
      <div className="new-cases"> +{rowData.todayCases.toLocaleString()} </div>
    ) : (
      <span></span>
    );
  const deathTemplate = (rowData, column) => (
    <div className="death-cases">+{rowData[column.field].toLocaleString()}</div>
  );

  const countryTemplate = (rowData, column) => (
    <Link to={`details/${rowData[column.field]}`}>{rowData[column.field]}</Link>
  );
  return (
    <div>
      <DataTable
        className="table table-striped"
        responsive={true}
        selectionMode="single"
        value={countries}
        sortMode="multiple"
        resizableColumns={true}
        columnResizeMode="fit"
        paginator={true}
        rows={10}>
        <Column
          field="country"
          body={countryTemplate}
          header="Countries"
          className="font-weight-bold"
          sortable="true"
        />
        <Column
          field="cases"
          body={valueTemplate}
          header="Cases"
          sortable="true"
        />
        <Column
          field="todayCases"
          body={newCasesTemplate}
          header="Today Cases"
          sortable="true"
        />
        <Column
          field="deaths"
          body={deathTemplate}
          header="Total Deaths"
          sortable="true"
        />
        <Column
          field="active"
          body={valueTemplate}
          header="Active Cases"
          sortable="true"
        />
        <Column
          field="recovered"
          body={valueTemplate}
          header="Recovered"
          sortable="true"
        />
        <Column
          field="critical"
          body={valueTemplate}
          header="Critical"
          sortable="true"
        />
        <Column
          field="casesPerOneMillion"
          body={valueTemplate}
          header="Tot Cases/1M"
          sortable="true"
        />
      </DataTable>
    </div>
  );
};

export default CountryTable;
