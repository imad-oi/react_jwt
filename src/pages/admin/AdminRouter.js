import React from "react";
import { Route, Routes } from "react-router-dom";

import Patients from "./Patients";
import { AddPatient, AdminLayout, Dashbord, EditPatient, HorizontalLinearStepper, Statistics } from "./index";
import Horizontal from "./Horizontal";

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index path="/" element={<Dashbord />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/statistic" element={<Statistics />} />
        <Route path="/stepper" element={<Horizontal />} />
        <Route path="/patients/add/" element={<AddPatient />} />
        <Route path="/patients/edit/:id" element={<EditPatient />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
