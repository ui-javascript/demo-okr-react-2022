import React from "react";
import ReactDOM from "react-dom";

import { Table } from "rsuite";
import data from "./data/merge-row.js";

const { Column, ColumnGroup, Cell, HeaderCell } = Table;

import "rsuite/styles/index.less";

const App = () => {
  return (
    <Table
      height={420}
      headerHeight={120}
      verticalAlign="middle"
      bordered
      cellBordered
      autoHeight
      data={data}
      hover={false}
    >
      
      <ColumnGroup
        height={300}
        // verticalAlign="middle"
        header="ORK季度初制定"
      >

        <Column
          width={200}
          verticalAlign="middle"
          rowSpan={(rowData) => {
            return rowData.cityRowSpan;
          }}
        >
          <HeaderCell>目标（O）</HeaderCell>
          <Cell  dataKey="city" />
        </Column>

        <Column
          width={200}
          verticalAlign="middle"
          rowSpan={(rowData) => {
            return rowData.streetRowSpan;
          }}
        >
          <HeaderCell>关键结果（KR）</HeaderCell>
          <Cell dataKey="street" />
        </Column>

        <Column width={130} verticalAlign="middle" colSpan={2}>
          <HeaderCell>负责方</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column verticalAlign="middle" width={130}>
          <HeaderCell>配合方</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column verticalAlign="middle" flexGrow={1} width={200}>
          <HeaderCell>权重</HeaderCell>
          <Cell dataKey="companyName" />
        </Column>
      </ColumnGroup>
    </Table>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
