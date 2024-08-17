import { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Box,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";

import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { getAllUsers } from "../../../api/userManagement";
import CustomPagination from "../../../components/pagination/CustomPagination";
import { PaginationContext } from "../../../context/PaginationContent";
import {
  AddRounded,
  BorderColorRounded,
  CheckCircleRounded,
  DeleteRounded,
  FilterAltRounded,
  RemoveCircleRounded,
  SearchRounded,
} from "@mui/icons-material";
import { useDebouncedSearch } from "../../../hooks/useDebouncedSearch";
import { useHandleSortModelChange } from "../../../utils/sortUtils";
import { SortModelContext } from "../../../context/SortModel";
import { Link } from "react-router-dom";
import AdminTitle from "../../../components/typography/AdminTitle";
import NormalButton from "../../../components/button/NormalButton";
import { DeleteModalContext } from "../../../context/DeleteModalContext";
import { Chip } from "@mui/material";

type User = {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  gender: string | null;
  address: string | null;
  region: string | null;
  role: string | null;
};

type Params = {
  search?: string;
  sort_by?: string;
  sort_order?: string;
};

const UserList = () => {
  const [paramString, setParamString] = useState<string>("");
  const [usersList, setUsersList] = useState<User[]>([]);

  const { searchText, handleInputChange, handleKeyDown, triggerSearch } =
    useDebouncedSearch(300);

  const { confirm, setOpen } = useContext(DeleteModalContext);

  const { setPageCount, currentPage, selectedLimit } =
    useContext(PaginationContext);

  const { sortBy, sortOrder } = useContext(SortModelContext);

  const handleSortModelChange = useHandleSortModelChange();

  useEffect(() => {
    const createParamString = () => {
      const params: Params = {};
      if (typeof searchText === "string") {
        params.search = searchText;
      }

      if (typeof sortOrder === "string") {
        params.sort_order = sortOrder;
      }

      if (typeof sortBy === "string") {
        params.sort_by = sortBy;
      }

      const newParamString = new URLSearchParams(params).toString();
      setParamString(newParamString);
    };
    createParamString();
  }, [searchText, sortBy, sortOrder]);

  const { isLoading, isFetching } = useQuery<User[]>({
    queryKey: ["users-list", currentPage, selectedLimit, paramString],
    queryFn: async () =>
      await getAllUsers(currentPage, selectedLimit, paramString).then(
        (response) => {
          if (response.data.code === 200) {
            setPageCount(response.data.meta.last_page);
            setUsersList(response.data.data);
            return response.data;
          }
        }
      ),
  });

  const userColumns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      minWidth: 60,
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 100,
      flex: 2,
    },
    {
      field: "phone_number",
      headerName: "Phone Number",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "gender",
      headerName: "Gender",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "region",
      headerName: "Region",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "account_status",
      headerName: "Account Status",
      minWidth: 100,
      flex: 1,
      renderCell: (params) => (
        <>
          {params.row.account_status ? (
            <>
              <CheckCircleRounded fontSize="small" color="success" />
            </>
          ) : (
            <>
              <RemoveCircleRounded fontSize="small" color="disabled" />
            </>
          )}
        </>
      ),
    },
    {
      field: "role",
      headerName: "Role",
      minWidth: 100,
      flex: 1,
      renderCell: (params) => (
        <Chip
          label={params.row.role}
          color={params.row.role === "Admin" ? "info" : "warning"}
        />
      ),
    },
    {
      field: "action",
      headerName: "Action",
      minWidth: 100,
      flex: 1,
      renderCell: (params) => (
        <>
          <Box
            sx={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link to={`/leave-request/${params.row.id}/update`}>
              <IconButton aria-label="edit">
                <BorderColorRounded color="info" />
              </IconButton>
            </Link>

            <IconButton onClick={() => setOpen(true)} aria-label="edit">
              <DeleteRounded color="error" />
            </IconButton>
          </Box>
        </>
      ),
    },
  ];

  console.log(confirm);

  return (
    <>
      <AdminTitle text="User List" />
      <Paper>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" justifyContent="flex-start" alignItems="center">
            <Box display="flex" justifyContent="center" alignItems="center">
              <TextField
                label="Search"
                size="small"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "25ch" }}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchRounded />
                    </InputAdornment>
                  ),
                }}
              />
              <NormalButton
                text="Search"
                type="contained"
                onClick={triggerSearch}
              />

              {/* <Button sx={{ ml: 2 }} variant="contained" onClick={triggerSearch}>
            Export
          </Button> */}
            </Box>
            <FilterAltRounded />
          </Box>
          <Link to="create">
            <NormalButton text="Create" type="contained" icon={AddRounded} />
          </Link>
        </Box>

        <Box>
          <DataGrid
            rows={usersList}
            columns={userColumns}
            loading={isLoading || isFetching}
            sx={{
              borderLeft: 0,
              borderRight: 0,
              bgcolor: "#fff",
            }}
            autoHeight={true}
            disableColumnMenu
            disableColumnSelector
            disableDensitySelector
            disableRowSelectionOnClick
            disableVirtualization
            hideFooterSelectedRowCount
            rowSelection
            keepNonExistentRowsSelected
            slots={{
              pagination: CustomPagination,
            }}
            onSortModelChange={handleSortModelChange}
          />
        </Box>
      </Paper>
    </>
  );
};

export default UserList;
