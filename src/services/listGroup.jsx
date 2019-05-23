import React, { Component } from "react";

const ListGroup = props => {
  const {
    items,
    textProperty,
    valueProperty,
    onGenreChange,
    selectedItem
  } = props;
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          onClick={() => onGenreChange(item)}
          key={item[valueProperty]}
          className={
            selectedItem === item ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "id"
};
export default ListGroup;
