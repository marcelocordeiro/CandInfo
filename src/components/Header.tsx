import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Hidden,
  IconButton,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  Link,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Menu, ChevronRight } from "@mui/icons-material";

const navigationLinks = [
  { name: "Candidatos", href: "/candidatos" },
  { name: "Estatísticas", href: "#" },
  { name: "Quem Somos", href: "#" },
  { name: "Contato", href: "#" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const { pathname } = window.location;
  console.log(pathname);
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "2rem",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: pathname === "/" ? "none" : "flex",
              position: "absolute",
              left: 0,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CandInfo
          </Typography>
          <Hidden smDown>
            {navigationLinks.map((item) => (
              <Link
                variant="button"
                href={item.href}
                key={item.name}
                sx={{
                  color: "white",
                  backgroundColor: "transparent",
                  padding: "0.25rem 0.5rem 0.25rem 0.5rem",
                  borderRadius: "0",
                  textDecoration:
                    pathname === "/candidatos" && item.name === "Candidatos"
                      ? "underline"
                      : "none",
                  "&:hover": {
                    color: theme.palette.primary.main,
                    backgroundColor: "white",
                    borderRadius: "0.25rem",
                  },
                }}
              >
                {item.name}
              </Link>
            ))}
          </Hidden>
          <Hidden smUp>
            <IconButton onClick={() => setOpen(true)} sx={{ color: "white" }}>
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>
      <SwipeableDrawer
        swipeAreaWidth={0}
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div
          onClick={() => setOpen(false)}
          onKeyPress={() => setOpen(false)}
          role="button"
          tabIndex={0}
        >
          <IconButton>
            <ChevronRight />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navigationLinks.map((item) => (
            <ListItem key={item.name}>
              <Link
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Header;
