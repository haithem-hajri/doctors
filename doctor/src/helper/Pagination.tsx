import React from "react";
import "./pagination.css";
import Pagination from "react-responsive-pagination";
const Paginate = (props: any) => {
  const { totalPages, currentPage, setCurrentPage } = props;
  return (
    <Pagination
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage}
    />
  );
};
export default Paginate;
