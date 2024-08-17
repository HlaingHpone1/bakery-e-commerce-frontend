import { SelectChangeEvent } from "@mui/material";
import { ReactNode, useState, createContext } from "react";

interface PaginationProps {
  pageCount: number;
  setPageCount: (page: number) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  selectedLimit: number;
  setSelectedLimit: (selected: number) => void;
  handleChangeLimit: (e: SelectChangeEvent<number>) => void;
  limitArray: number[];
}

const defaultValue: PaginationProps = {
  pageCount: 0,
  setPageCount: () => {
    console.warn("setPageCount function is not wrapped in a ValueProvider");
  },
  currentPage: 1,
  setCurrentPage: () => {
    console.warn("setCurrentPage function is not wrapped in a ValueProvider");
  },
  selectedLimit: 10,
  setSelectedLimit: () => {
    console.warn("setSelectLimited function is not wrapped in a ValueProvider");
  },
  handleChangeLimit: () => {
    console.warn("setSelectLimited function is not wrapped in a ValueProvider");
  },
  limitArray: [10, 25, 50, 100],
};

export const PaginationContext = createContext<PaginationProps>(defaultValue);

interface ValueProviderProps {
  children: ReactNode;
}

export const PaginationProvider = ({ children }: ValueProviderProps) => {
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLimit, setSelectedLimit] = useState(10);

  const limitArray = [10, 25, 50, 100];

  const handleChangeLimit = (e: SelectChangeEvent<number>) => {
    setCurrentPage(1);
    setSelectedLimit(Number(e.target.value));
  };

  return (
    <PaginationContext.Provider
      value={{
        pageCount,
        setPageCount,
        currentPage,
        setCurrentPage,
        selectedLimit,
        setSelectedLimit,
        limitArray,
        handleChangeLimit,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
