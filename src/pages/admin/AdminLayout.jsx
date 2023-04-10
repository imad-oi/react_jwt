import { Outlet } from "react-router-dom";

import Sidebar from "../../components/admin/sidebar/Sidebar";

const AdminLayout = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
