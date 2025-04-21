import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import UseReg from "./SignUp/SignUp";
import Page404 from './Page404/Page404';
import { Doctors } from './Doctors/doctors';
// import FilePage from "./FileStorage/FilePage/FilePage";
import { Customers } from './Customers/Customers';
import AdminPanel from "./AdminPanelPage/AdminPanel";
import { StartPages } from "./StartPage/StartPages";


/**
 * Главный компомент с навигацией по сайту
 */
function CRUD() {
    return (
        <div className="container navigation-menu">
                <Routes>
                    <Route path="/" element={<StartPages />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<UseReg />} />
                    <Route path="/doctor" element={<Doctors />} />
                    <Route path="/customer" element={<Customers />} />
                    <Route path="/admin" element={<AdminPanel />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
        </div>
    );
}

export default CRUD;