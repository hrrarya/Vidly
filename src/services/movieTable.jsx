import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./table";

class MovieTable extends Component {
  columns = [
    {
      path: "Title",
      label: "Title",
      content: m => <Link to={`/movies/${m.imdbID}`}>{m.Title}</Link>
    },
    { path: "Genre", label: "Genre" },
    { path: "imdbVotes", label: "Votes" },
    { path: "imdbRating", label: "Ratings" },
    {
      key: "like",
      content: m => (
        <i
          onClick={() => this.props.onLike(m)}
          className={m.Like ? "fa fa-heart" : "fa fa-heart-o"}
        />
      )
    },
    {
      key: "action",
      content: m => (
        <button
          onClick={() => this.props.onDelete(m)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];
  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        data={movies}
        onSort={onSort}
      />
    );
  }
}

export default MovieTable;
