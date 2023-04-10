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
    console.log(patient , "patient");
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
            value={patient.nom}
            autoFocus
            margin="dense"
            id="firstName"
            label="nom"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) =>
              setPatient({ ...patient, nom: e.target.value })
            }
          />
          <TextField
            value={patient.prenom}
            autoFocus
            margin="dense"
            id="lastName"
            label="prenom"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {
              setPatient({ ...patient, prenom: e.target.value });
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
            value={patient.pays}
            autoFocus
            margin="dense"
            id="age"
            label="pays"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => setPatient({ ...patient, pays: e.target.value })}
          />
          <TextField
            value={patient.email}
            autoFocus
            margin="dense"
            id="age"
            label="pays"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => setPatient({ ...patient, email: e.target.value })}
          />
          <TextField
            value={patient.sexe}
            autoFocus
            margin="dense"
            id="age"
            label="pays"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => setPatient({ ...patient, sexe: e.target.value })}
          />
          <TextField
            value={patient.telephone}
            autoFocus
            margin="dense"
            id="age"
            label="pays"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => setPatient({ ...patient, telephone: e.target.value })}
          />
          {/* <TextField
            value={patient.dataNaissance && patient.dataNaissance.split("T")[0]}
            autoFocus
            margin="dense"
            id="age"
            label="data naissance"
            type="date"
            fullWidth
            variant="outlined"
            onChange={(e) => setPatient({ ...patient, dataNaissance: e.target.value })}
          /> */}
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
