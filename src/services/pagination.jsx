import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = props => {
  const { items, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(items / pageSize);
  const page = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {page.map(p => (
          <li
            key={p}
            className={currentPage === p ? "page-item active" : "page-item"}
          >
            <a onClick={() => onPageChange(p)} className="page-link">
              {p}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  items: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
