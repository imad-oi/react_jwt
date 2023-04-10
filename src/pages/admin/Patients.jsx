import { Button, Paper } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { userService } from "../../_services/user.services";
import DataTable from "../../components/admin/DataTable";
import FormDialog from "../../components/admin/Dialog";

import "../../styles/patients.css";

const Patients = () => {
  const [open, setOpen] = useState(false);
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  const getPatients = async () => {
    userService.getAllUsers().then((res) => {
      console.log(res.data.data);
      setPatients(res.data.data);
    });

    // axios.get("http://localhost:5000/api/users/").then((res) => {
    //   console.log(res.data);
    //   setPatients(res.data);
    // });
  };
  const onSavePatient = async (patient) => {
    // axios
    // .post("http://localhost:5000/api/v1/patients/create", patient)
    // .then((res) => {
    //   setPatients(res.data);
    //   Swal.fire("Patient created ", "", "success");
    //   });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getPatients();
  }, []);

  const initializePatient = {
    firstName: "",
    lastName: "",
    // email : '' ,
    age: "",
  };
  return (
    <div className="patients_container">
      <div className="container">
        <div className="row  d-flex justify-content-between align-items-center">
          <div className="col-4">
            <h1 className="fw-light">List patients</h1>
          </div>
          <div className="col-4 text-end">
            <Button onClick={handleClickOpen} variant="contained">
              <i className="fa fa-plus-circle" aria-hidden="true"> </i>  add new
              patient
            </Button>
            <FormDialog
              open={open}
              onClose={handleClose}
              initializePatient={initializePatient}
              title={"Add new Patient"}
              isUpdating={false}
              onSave={onSavePatient}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 ">
          <Paper elevation={2}>
            <DataTable  patients={patients} setPatients={setPatients} />
          </Paper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;
