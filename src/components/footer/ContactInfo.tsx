import { ReactNode } from "react";

import { Avatar, Box, Stack, Typography } from "@mui/material";

type ContactInfoProps = {
  icon: ReactNode;
  text: string;
};

const ContactInfo = ({ icon, text }: ContactInfoProps) => {
  return (
    <Box display="flex" gap="10px" alignItems="center" marginBottom="10px">
      <Avatar
        sx={{
          bgcolor: "#8B4513",
        }}
      >
        {icon}
      </Avatar>
      <Stack>
        <Typography
          variant="h6"
          component="p"
          sx={{
            fontSize: "18px",
          }}
        >
          {text}
        </Typography>
      </Stack>
    </Box>
  );
};

export default ContactInfo;
