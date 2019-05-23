import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    return this.props.onSort(sortColumn);
  };

  raiseIcon = column => {
    const { sortColumn } = this.props;
    if (column.label !== sortColumn.path) return null;

    if (sortColumn.order === "asc")
      return <i className="fa fa-sort-asc" aria-hidden="true" />;
    else {
      return <i className="fa fa-sort-desc" aria-hidden="true" />;
    }
  };
  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((column, i) => (
            <th
              className="clickable"
              key={i}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.raiseIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
