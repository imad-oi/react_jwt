import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

import FormDialog from "./Dialog";

const DataTable = ({ patients ,   setPatients }) => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [patient, setPatient] = useState({});
  

  const handlePageChange = (params) => {
    setPage(params.page + 1);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = (e) => {
    // console.log('from handEdit datatable : ',e);
    setPatient(e)
    setOpen(true);
  };
  const handleDelete = (e) => {
    // console.log(e);
  };

  useEffect(() => {
    setPatients(patients);
  }, []);

  const onUpdatePatient = async ()=>{
    // axios.patch('http://localhost:5000/api/v1/patients/update' , patient).then(
    //   res => 
    //   {
    //       setPatients(res.data);
    //       Swal.fire('Patient updated with success' , '' , 'success')
    //   }
    // )
  }

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 120 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 60,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <div>
          <Button
            variant="contained"
            size="small"
            style={{ marginRight: 5, backgroundColor: "#36A2EB" }}
            onClick={() => handleEdit(params.row)}
          >
            Edit
          </Button>
          <Button
            style={{ backgroundColor: "#FF6384" }}
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const patientss = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 23 },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 10, lastName: "imad", firstName: "oissafe", age: 20 },
    { id: 11, lastName: "Smith", firstName: "John", age: 27 },
    { id: 12, lastName: "Doe", firstName: "Jane", age: 36 },
    { id: 13, lastName: "Williams", firstName: "David", age: 48 },
    { id: 14, lastName: "Garcia", firstName: "Maria", age: 54 },
    { id: 15, lastName: "Davis", firstName: "Andrew", age: 19 },
    { id: 16, lastName: "Wilson", firstName: "Emily", age: 29 },
    { id: 17, lastName: "Anderson", firstName: "Michael", age: 41 },
    { id: 18, lastName: "Taylor", firstName: "Samantha", age: 32 },
    { id: 19, lastName: "Martinez", firstName: "Jessica", age: 25 },
    { id: 20, lastName: "Hernandez", firstName: "Pedro", age: 57 },
  ];
  return (
    <div style={{ height: 600, width: "100%" }}>
      
      <DataGrid
        rows={patientss}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[5]}
        checkboxSelection
        pagination
        page={page}
        onPageChange={handlePageChange}
        style={{ height: "100%" }}
      />
      <FormDialog 
      open={open} 
      initializePatient={patient} 
      onClose={handleClose}
      title={'update Patient'}
      isUpdating={true}
      onSave={onUpdatePatient}
      />
    </div>
  );
};


export default DataTable;

