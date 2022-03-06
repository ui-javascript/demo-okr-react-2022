import React, { useState } from "react"
import ReactDOM from "react-dom"

import {Button, TimePicker} from "antd"

import moment from 'moment';

import 'antd/dist/antd.css';

function onChange(time, timeString) {
  console.log(time, timeString);
}

function App() {
  return (
    <div>
    <Button type="primary" icon="plus">Demo</Button>

      <div className={"mt-5"}>
        <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
      </div>
    </div>
  );
}

// ReactDOM.render(<App />, mountNode);
ReactDOM.render(<App />, document.getElementById('root'));
