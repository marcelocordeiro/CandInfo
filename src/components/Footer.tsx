import React from "react";
import { Typography, Container, Hidden } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();
  return (
    <Hidden smDown>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: theme.palette.primary.main,
          color: "white",
          margin: "0",
          position: "fixed",
          bottom: "0",
          padding: "0.5rem",
        }}
      >
        <Typography>Todos os Direitos Reservados © 2022</Typography>
      </Container>
    </Hidden>
  );
};

export default Footer;
