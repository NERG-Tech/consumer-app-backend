import { Button, Box } from "@mui/material";
import "./Layout.css";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <Box className="Layout">
      <Link to="/">
        <Button variant="contained">Hi</Button>
      </Link>
      <Button variant="contained" sx={{ ml: 2 }}>
        Hello World
      </Button>
    </Box>
  );
};

export default Layout;
