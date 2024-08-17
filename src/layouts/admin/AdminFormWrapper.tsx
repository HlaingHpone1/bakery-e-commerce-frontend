import { ReactNode } from "react";
import AdminTitle from "../../components/typography/AdminTitle";
import { Grid, Paper } from "@mui/material";

type AdminFormWrapperProps = {
  children: ReactNode;
  title: string;
};

const AdminFormWrapper = ({ children, title }: AdminFormWrapperProps) => {
  return (
    <>
      <AdminTitle text={title} />
      <Paper
        elevation={16}
        sx={{
          px: 2,
          py: 3,
        }}
      >
        <Grid container justifyContent="space-between">
          {children}
        </Grid>
      </Paper>
    </>
  );
};

export default AdminFormWrapper;
