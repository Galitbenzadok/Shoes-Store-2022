import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import config from "../../../Utils/Config";
import AddEmployee from "../AddEmployee/AddEmployee";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./Employees.css";

function Employees(): JSX.Element {

    const [employee, setEmployee] = useState<EmployeeModel[]>([])

    useEffect(() => {

        (async function () {

            //AJAX:
            const response = await axios.get<EmployeeModel[]>(config.employeesUrl);

            //Extract the data:
            setEmployee(response.data);

        })();

    }, [])

    
    return (
        <div className="Employees">
            <h1>העובדים שלנו</h1>

            <NavLink className="addBut" to="/employees/new"> ➕ </NavLink>
           
            {employee.map(e => <EmployeeCard key={e.id} employee={e} />)}
        </div>
    );
}

export default Employees;
