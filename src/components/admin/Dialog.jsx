import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";


export default function FormDialog({
  open,
  onClose,
  initializePatient,
  title,
  isUpdating,
  onSave,
}) {
  const [patient, setPatient] = useState({ ...initializePatient });

  function handleSent() {
    onSave(patient);
    onClose();
  }

  useEffect(() => {
    setPatient(initializePatient);
  }, [initializePatient]);

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>{title} </DialogTitle>
        <DialogContent>
          <TextField
            value={patient.firstName}
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) =>
              setPatient({ ...patient, firstName: e.target.value })
            }
          />
          <TextField
            value={patient.lastName}
            autoFocus
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {
              setPatient({ ...patient, lastName: e.target.value });
            }}
          />
          {/* <TextField
          value={patient.email}
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            onChange={(e) => setPatient({ ...patient, email: e.target.value })}
          /> */}
          <TextField
            value={patient.age}
            autoFocus
            margin="dense"
            id="age"
            label="Age"
            type="number"
            fullWidth
            variant="outlined"
            onChange={(e) => setPatient({ ...patient, age: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button color="error" variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" color="success" onClick={handleSent}>
            {isUpdating ? "Update" : "Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
