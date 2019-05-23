import React, { Component } from "react";
import MovieTable from "./movieTable";
import Pagination from "./pagination";
import ListGroup from "./listGroup";
import { getMovies, getGenres } from "./Film.js";
import { paginate } from "./paginate";
import _ from "lodash";

class Movie extends Component {
  state = {
    movie: [],
    genres: [],
    pageSize: 3,
    currentPage: 1,
    sortColumn: { path: "Title", order: "asc" }
  };
  componentDidMount() {
    const genres = [{ id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movie: getMovies(), genres: genres });
  }

  handleDelete = movie => {
    const allMovie = [...this.state.movie];
    const movies = allMovie.filter(m => m !== movie);
    this.setState({
      movie: movies
    });
  };
  handleGenreChange = genre => {
    this.setState({ selectedItem: genre, currentPage: 1 });
  };
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };
  handleLike = movie => {
    const movies = [...this.state.movie];
    const mov = movies.indexOf(movie);
    movies[mov].Like = !movies[mov].Like;

    this.setState({
      movie: movies
    });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  getPageData = () => {
    const {
      pageSize,
      currentPage,
      movie,
      selectedItem,
      sortColumn
    } = this.state;
    const filtered =
      selectedItem && selectedItem.id
        ? movie.filter(m => m.Genre == selectedItem.name)
        : movie;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movis = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movis };
  };
  render() {
    const { pageSize, genres, selectedItem } = this.state;
    const { length: count } = this.state.movie;

    if (count === 0)
      return <p className="container">There is no movie in the database</p>;

    const { totalCount, data: movis } = this.getPageData();
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genres}
            onGenreChange={this.handleGenreChange}
            selectedItem={selectedItem}
          />
        </div>
        <div className="col">
          <p>{totalCount} movie is showing from database</p>
          <MovieTable
            movies={movis}
            sortColumn={this.state.sortColumn}
            onSort={this.handleSort}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          />
          {totalCount > pageSize && (
            <Pagination
              items={totalCount}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              onPageChange={this.handlePageChange}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Movie;
