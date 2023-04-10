import { Avatar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { forwardRef, useState } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProfileDialog = ({ openProfile, onClose }) => {
  // const [value, setValue] =useState(0);

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={openProfile}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="dark"
              onClick={handleClose}
              aria-label="close"
            >
              <i class="fa fa-close" aria-hidden="true"></i>
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Profile Setting
            </Typography>
            <Button autoFocus color="inherit">
              <Avatar src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg" />
            </Button>
          </Toolbar>
        </AppBar>

        <div className="row">
          <div className="col-4 ">
            <ul className="nav text-dark">
              <li class="nav-item">
                <a
                  class="nav-link  fw-bold text-dark "
                  aria-current="page"
                  href="#"
                >
                  Personnel
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link  fw-bold text-dark"
                  aria-current="page"
                  href="#"
                >
                  Groups
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link  fw-bold text-dark"
                  aria-current="page"
                  href="#"
                >
                  lorem
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ProfileDialog;
