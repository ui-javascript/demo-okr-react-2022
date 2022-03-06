import React from "react"
import ReactDOM from "react-dom"

// import {Button, TimePicker} from "antd"
import { Table } from 'rsuite';
// import Table from 'rsuite/Table';


// import moment from 'moment';

// import 'antd/dist/antd.css';
import 'rsuite/styles/index.less'; // or 'rsuite/dist/rsuite.min.css'

import fakeData from "./data.js"

console.log(fakeData)

// function onChange(time, timeString) {
//   console.log(time, timeString);
// }

const ActionCell = ({ rowData, dataKey, ...props }) => {
  function handleAction() {
    alert(`id:${rowData[dataKey]}`);
  }
  return (
    <Table.Cell {...props} className="link-group">
      <IconButton appearance="subtle" onClick={handleAction} icon={<Edit2 />} />
    </Table.Cell>
  );
};

function App () {
  return (
    <Table
      height={400}
      data={fakeData}
      onRowClick={data => {
        console.log(data);
      }}
    >
      <Table.Column width={70} align="center" fixed>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.Cell dataKey="id" />
      </Table.Column>

      <Table.Column width={130} fixed>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.Cell dataKey="firstName" />
      </Table.Column>

      <Table.Column width={130}>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.Cell dataKey="lastName" />
      </Table.Column>

      <Table.Column width={200}>
        <Table.HeaderCell>City</Table.HeaderCell>
        <Table.Cell dataKey="city" />
      </Table.Column>

      <Table.Column width={200}>
        <Table.HeaderCell>Street</Table.HeaderCell>
        <Table.Cell dataKey="street" />
      </Table.Column>

      <Table.Column width={300}>
        <Table.HeaderCell>Company Name</Table.HeaderCell>
        <Table.Cell dataKey="companyName" />
      </Table.Column>

      <Table.Column width={300}>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.Cell dataKey="email" />
      </Table.Column>

      <Table.Column width={80} fixed="right">
        <Table.HeaderCell>Action</Table.HeaderCell>
        <Table.Cell dataKey={'id'} />
      </Table.Column>
    </Table>
  );
};


// function App() {
//   return (
//     <div>
//     <Button type="primary" icon="plus">Demo</Button>

//       <div className={"mt-5"}>
//         <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
//       </div>
//     </div>
//   );
// }

// ReactDOM.render(<App />, mountNode);
ReactDOM.render(<App />, document.getElementById('root'));
