import {Route, Routes } from "react-router-dom";
import AddEmployee from "../../EmployeesArea/AddEmployee/AddEmployee";
import DeleteEmployee from "../../EmployeesArea/DeleteEmployee/DeleteEmployee";
import EmployeeDetails from "../../EmployeesArea/EmployeeDetails/EmployeeDetails";
import Employees from "../../EmployeesArea/Employees/Employees";
import UpdateEmployee from "../../EmployeesArea/UpdateEmployee/UpdateEmployee";
import About from "../../HomeArea/About/About";
import ContactUs from "../../HomeArea/ContactUs/ContactUs";
import Home from "../../HomeArea/Home/Home";
import ListOfShoes from "../../HomeArea/ListOfShoes/ListOfShoes";
import SuccessStories from "../../HomeArea/SuccessStories/SuccessStories";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<ListOfShoes />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/employees/Details/:id" element={<EmployeeDetails />} />
            <Route path="/employees/new" element={<AddEmployee />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/employees/delete/:id" element={<DeleteEmployee />} />
            <Route path="/employees/edit/:id" element={<UpdateEmployee />} />

            <Route path="/About" element={<About />} />

            <Route path="*" element={<PageNotFound />} />

        </Routes>
    );
}

export default Routing;
