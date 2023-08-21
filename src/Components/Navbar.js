import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { collapseSidebar } = useProSidebar();

  return (
    <Sidebar
      style={{
        height: "100vh",
      }}
      className="css-dip3t8"
    >
      <Menu>
        <MenuItem
          className="links"
          icon={<MenuOutlinedIcon />}
          onClick={() => {
            collapseSidebar();
          }}
          style={{ textAlign: "center" }}
        >      
          <h2>HOME</h2>
        </MenuItem>

        <NavLink to="/" className="links">
          <MenuItem icon={<AdminPanelSettingsIcon />}>UserDetails</MenuItem>
        </NavLink>
        <NavLink to="/profile" className="links">
          <MenuItem icon={<PeopleOutlinedIcon />}>Profile</MenuItem>
        </NavLink>
      </Menu>
    </Sidebar>
  );
}

export default Navbar;
