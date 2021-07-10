import React from "react";
import "./TableApp.css";
import jsonDATA from "../data/json_data.json";
const dxData = jsonDATA.metaData.dimensions.dx;
const ouData = jsonDATA.metaData.dimensions.ou;
const rowsData = jsonDATA.rows;

const ColumnApp = (tableSelection) => {
  const colOneApps = [];
  const colTwoApps = [];
  console.log("The props is " + typeof tableSelection);
  if (tableSelection) {
    dxData.forEach((singleOject) => {
      let dat = [jsonDATA.metaData.names[singleOject]];
      ouData.forEach((secondObject) => {
        console.log(singleOject);
        rowsData.forEach((row) => {
          if (row[0] == singleOject && row[1] == secondObject) {
            dat.push(row[2]);
          }
        });
      });
      colOneApps.push(dat);
    });
    return colOneApps;
  } else {
    ouData.forEach((secondObject) => {
      let dat = [jsonDATA.metaData.names[secondObject]];
      dxData.forEach((singleOject) => {
        rowsData.forEach((row) => {
          if (row[0] == singleOject && row[1] == secondObject) {
            dat.push(row[2]);
          }
        });
      });
      colTwoApps.push(dat);
    });
    return colTwoApps;
  }
};

const RowColumnApp = (tableSelection ) => {
  const rowOneApps = [];
  const rowTwoApps = [];

  ouData.map((data) => {
    rowOneApps.push(jsonDATA.metaData.names[data]);
  });
  dxData.map((data) => {
    rowTwoApps.push(jsonDATA.metaData.names[data]);
  });
  if (tableSelection) {
    return ["Places Vs Data", ...rowOneApps];
  } else {
    return ["Data Vs Places", ...rowTwoApps];
  }
};
const TableApp = (props) => {
  return (
    <div>
      <table
        style={{
          width: "70%",
          height: "350px",
          marginLeft: "10%",
          marginTop: "90px",
        }}
      >
        <tr>
          {RowColumnApp(props.name).map((a) => {
            return (
              <th>
                <b>{a}</b>
              </th>
            );
          })}

          {}
        </tr>

        {ColumnApp(props.name).map((row) => (
          <tr>
            {row.map((data) => (
              <td>{data}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TableApp;
