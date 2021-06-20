import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
//https://github.com/AllenFang/react-bootstrap-table/tree/master/examples/js

function imageFormatter(cell, row) {
  return "<img  width='50' height='60' src='" + cell + "'/>";
}
const SearchResultShow = (props) => {
  return (
    <BootstrapTable data={props.result} striped hover pagination>
      <TableHeaderColumn isKey dataField="id">
        ID
      </TableHeaderColumn>
      <TableHeaderColumn dataField="name" dataSort>
        Name
      </TableHeaderColumn>
      <TableHeaderColumn dataField="image" dataFormat={imageFormatter}>
        Image
      </TableHeaderColumn>
    </BootstrapTable>
  );
};

export default SearchResultShow;
