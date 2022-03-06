import React from "react";
import ReactDOM from "react-dom";

import { Table } from "rsuite";
import data from "./data/merge-col.js"

const {Column, ColumnGroup, Cell, HeaderCell} = Table

import "rsuite/styles/index.less";

const App = () => {
  return (
    <Table
      bordered
      cellBordered
      height={420}
      headerHeight={80}
      data={data}
      
      onRowClick={data => {
        console.log(data);
      }}
    >
      <Column width={70} align="center">
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>
      
      <ColumnGroup header="Name">
        <Column width={130} colSpan={2}>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column width={130}>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>
      </ColumnGroup>

     

      <Column width={200} colSpan={2}>
        <HeaderCell>Address</HeaderCell>
        <Cell dataKey="city" />
      </Column>

      <Column width={200} flexGrow={1}>
        <HeaderCell>Company Name</HeaderCell>
        <Cell dataKey="companyName" />
      </Column>
    </Table>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
