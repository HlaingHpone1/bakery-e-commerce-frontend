import { Pagination } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import { PaginationContext } from "../../context/PaginationContent";
import { GridPagination } from "@mui/x-data-grid";

const CustomPagination = () => {
  const {
    pageCount,
    currentPage,
    setCurrentPage,
    selectedLimit,
    setSelectedLimit,
    limitArray,
  } = useContext(PaginationContext);

  const PaginationList = () => {
    return (
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={(e, newPage) => setCurrentPage(newPage)}
        showFirstButton
        showLastButton
      />
    );
  };

  return (
    <GridPagination
      ActionsComponent={PaginationList}
      labelRowsPerPage=""
      labelDisplayedRows={() => ""}
      onPageChange={(e: unknown, newPage) => setCurrentPage(newPage)}
      rowsPerPage={selectedLimit}
      onRowsPerPageChange={(
        e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      ) => {
        setSelectedLimit(Number(e.target.value));
        setCurrentPage(1);
      }}
      rowsPerPageOptions={limitArray}
    />
  );
};

export default CustomPagination;
