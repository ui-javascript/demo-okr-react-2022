import React from "react";
import ReactDOM from "react-dom";

import { Table } from "rsuite";
import data from "./data/merge-row.js"

const {Column, ColumnGroup, Cell, HeaderCell} = Table

import "rsuite/styles/index.less";

const App = () => {
  return (
    <Table bordered cellBordered autoHeight data={data} hover={false}>
      <ColumnGroup height="160"  verticalAlign="middle" header="ORK季度初制定">
        
        <Column
          height={480}
          headerHeight={180}
          width={200}
          
          // verticalAlign="middle"
          rowSpan={rowData => {
            return rowData.cityRowSpan;
          }}
        >
          <HeaderCell height={100}>
            <p>目标（O）</p>
            <p>（数量3~5个）</p>
          </HeaderCell>

          <Cell dataKey="city" />
        </Column>

        <Column
          width={200}
          verticalAlign="middle"
          rowSpan={rowData => {
            return rowData.streetRowSpan;
          }}
        >
          <HeaderCell>Street</HeaderCell>
          <Cell dataKey="street" />
        </Column>

  
        <Column width={130} colSpan={2}>
          <HeaderCell>负责方</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column width={130}>
          <HeaderCell>配合方</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={200} flexGrow={1}>
          <HeaderCell>权重</HeaderCell>
          <Cell dataKey="companyName" />
        </Column>

      </ColumnGroup>
      
    </Table>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
