import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import {
  CAKE_PATH,
  DASHBOARD_PATH,
  DASHBOARD_TEACHERPATH,
  DEPARTMENT_PATH,
  UPDATE_CAKEA_PATH,
  UPDATE_DEPARTMENT_PATH,
} from "./configs/constants";
import MainLayout from "./Layout/MainLayout";
import DashboardPageSPAM from "./pages/superAdmin/DashboardPageSPAM";
import DashboardPageTC from "./pages/Teacher/DashboardPageTC";
import CakePage from "./pages/superAdmin/table/CakePage";
import UpdateCakePageSPAM from "./pages/superAdmin/from/UpdateCakePageSPAM";
import DepartmentPageSPAM from "./pages/superAdmin/table/DepartmentPageSPAM";
import UpdateDepartmentSPAM from "./pages/superAdmin/from/UpdateDepartmentSPAM";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<MainLayout />}>
          <Route path={DASHBOARD_PATH} element={<DashboardPageSPAM />} />
          <Route path={CAKE_PATH} element={<CakePage />} />
          <Route
            path={`${UPDATE_CAKEA_PATH}/:id`}
            element={<UpdateCakePageSPAM />}
          />
          <Route
            path={`${UPDATE_DEPARTMENT_PATH}/:id`}
            element={<UpdateDepartmentSPAM />}
          />
          <Route path={DEPARTMENT_PATH} element={<DepartmentPageSPAM />} />
          <Route path={DASHBOARD_TEACHERPATH} element={<DashboardPageTC />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
