import { Button, Box } from "@mui/material";
import "./Layout.css";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Box className="Layout">
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/nutritions">
          <Button sx={{ ml: 2 }}>Nutritions</Button>
        </Link>
        <Link to="/nutirition-test">
          {/* <Button sx={{ ml: 2 }}>Nutritions Test</Button> */}
        </Link>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          p: 3,
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
