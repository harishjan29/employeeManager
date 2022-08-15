import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { AddUser } from "./features/users/AddUser";
import { EditUser } from "./features/users/EditUser";
import { React, Fragment } from "react";
import { UserList } from "./features/users/UserList";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2"
    }
  }
});
export default function App() {
  return (
    <Fragment>
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static" color="primary" enableColorOnDark>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Employee Manager App
              </Typography>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </Stack>

      <Router basename={"/employee"}>
        <div>
          <Switch>
            <Route path="/add-user">
              <AddUser />
            </Route>
            <Route path="/edit-user">
              <EditUser />
            </Route>
            <Route path="/employee">
              <UserList />
            </Route>
            <Route path="/">
              <UserList />
            </Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}
