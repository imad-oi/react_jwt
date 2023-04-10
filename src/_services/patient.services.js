import Axios from "./caller.services";

let getAllPatients = () => {
  return Axios.get("/patients");
};

let getPatientById = (id) => {
  return Axios.get(`/patients/${id}`);
};
let updatePatient = (patient) => {
  return Axios.patch(`/patients/${patient.id}` , patient );
};
let deletePatient = (id) => {
  return Axios.delete(`/patients/${id}` );
};

export const PatientService = { getAllPatients, getPatientById , deletePatient,  updatePatient };
