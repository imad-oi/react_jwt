import { Button, List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { accountService } from "../../../_services/account.services";
import data from "../../../Utils/Sidebar";
import ProfileDialog from "../../ProfileDialog";

import "../../../styles/sidebar.css";

const Sidebar = () => {
  const [openProfle, setOpenProfile] = useState(false);
  const [open, setOpen] = useState(false);

  let navigate = useNavigate() ; 
  const logOut = () => {
    accountService.logout() ; 
    navigate('/home')
  };

  const handleClickOpen = () => {
    // console.log(openProfle , 'from sidebar')
    setOpenProfile(true);
  };

  const handleClose = () => {
    setOpenProfile(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="sidebar_container">
      <div className=" text- py-5 logo ">
        <h1 className="logo">
          <i className="fa-solid fa-circle-h"> </i>Hospital
        </h1>
      </div>
      {data.map((item) => (
        <div className=" rounded-3 item" key={item.id}>
          <div>
            <span className="text-muted px-1">
              {/* <i className={item.logo}></i> */}
            </span>
            <Link className="link" to={item.lien}>
              {item.nom}
            </Link>
          </div>
          <i className="fa fa-arrow-right"></i>
        </div>
      ))}

      <div className="admin_profile">
        {open && (
          <List
            component="div"
            sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}
          >
            <ListItemButton onClick={logOut}>
              <ListItemText primary="Log Out" />
            </ListItemButton>
            <ListItemButton onClick={handleClickOpen}>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </List>
        )}

        <Button onClick={handleClick}>
          <i class="fa fa-gear fa-2x"></i>
        </Button>
      </div>
      <ProfileDialog openProfile={openProfle} onClose={handleClose} />
    </div>
  );
};

export default Sidebar;
