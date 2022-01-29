import { NavLink } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import config from "../../../Utils/Config";
import "./EmployeeCard.css";

interface EmployeeCardProps {
    employee: EmployeeModel;	
}

function EmployeeCard(props: EmployeeCardProps): JSX.Element {
    return (
        <div className="EmployeeCard Ebox">
			<div className="employeeInner">
                {props.employee.firstName} {props.employee.lastName}
                <br />
                <strong>{props.employee.title}</strong>
                <br /><br />
                country: {props.employee.country}
                <br />
                 city: {props.employee.city}
                <br />
                 birthDate: {props.employee.birthDate}
                <br />                
            </div>
            <div>
                 <NavLink to={"/employees/details/" + props.employee.id}>
                     <img src={config.employeesImageUrl + props.employee.imageName} alt="" />
                </NavLink>
            </div>
        </div>
    );
}

export default EmployeeCard;
