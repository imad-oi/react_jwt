import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AuthGuard from "./_helpers/AuthGuard";
import AdminRouter from "./pages/admin/AdminRouter";
import Patients from "./pages/admin/Patients";
import AuthRouter from "./pages/auth/AuthRouter";
import PublicRouter from "./pages/public/PublicRouter";

import "./App.css";

function App() {

  return (
    // <AuthContext.Provider value={contextValue}>
    //   {isAuth ? (
    //     <div className="app">
    //       <Sidebar />
    //       <Routes>
    //         <Route exact path="/patients" element={<Patients />} />
    //         <Route exact path="/statistic" element={<Statistics />} />
    //         <Route
    //           exact
    //           path="/stepper"
    //           element={<HorizontalLinearStepper />}
    //         />
    //         <Route exact path="/auth" element={<Auth />} />
    //         <Route path="*" element={<Navigate to="/auth" />} />
    //       </Routes>
    //     </div>
    //   ) : (
    //     <Auth />
    //   )}
    // </AuthContext.Provider>
    <Router>
      {/* <Patients /> */}
        <Routes>
          <Route
            path="/admin/*"
            element={
              <AuthGuard>
                <AdminRouter />
              </AuthGuard>
            }
          />
          <Route path="/*" element={<PublicRouter />} />
          <Route path="/auth/*" element={<AuthRouter />} />
        </Routes>
      </Router>
  );
}

export default App;
