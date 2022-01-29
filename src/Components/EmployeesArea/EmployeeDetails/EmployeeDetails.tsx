import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import employeesService from "../../../Services/EmployeesService";
import notify from "../../../Services/NotifyService";
import config from "../../../Utils/Config";
import Loading from "../../SharedArea/Loading/Loading";
import DeleteEmployee from "../DeleteEmployee/DeleteEmployee";
import "./EmployeeDetails.css";

function EmployeeDetails(): JSX.Element {

    // Get Route Parameter: 
      const params = useParams();
      const id = Number(params.id);


    const [employee, setEmployee] = useState<EmployeeModel>();

    // AJAX request that employee: 
    useEffect(() => {

        axios.get<EmployeeModel>(config.employeesUrl + id)
            .then(response => setEmployee(response.data))
            .catch(notify.error);

    }, []);

    async function deleteEmployee(): Promise<void>{
       try {
           const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
           if (!confirmDelete) return;

           await employeesService.deleteEmployee(id);
           notify.success("Employee wad deleted successfully")

            navigate("/employees");
        }
        catch (err: any) {
           notify.error("error")
        }
    }

        

    const navigate = useNavigate();

    return (
        <div className="EmployeeDetails">

            <h3 className="h3">Employee Details</h3>
            
            {!employee && <Loading />}
            
            {employee &&
                <>
                <div className="details">
                    <h3>Name: {employee.firstName} {employee.lastName}</h3>
                    <h3>Title: <span className="title">{employee.title}</span></h3>
                    <h3>Country: {employee.country}, City: {employee.city}</h3>
                    <h3>Birth date: {employee.birthDate}</h3>

                    <br />
                </div>
                <div>
                    <img src={config.employeesImageUrl + employee.imageName} /><br></br>                   
                    <button onClick={deleteEmployee}>delete</button>
                    <button onClick={() => navigate("/employees/edit/" + employee.id)}>Edit</button>
                    <button onClick={() => navigate(-1)}>Back</button>
                </div>       
                </>
            }

        </div>
    );
}

export default EmployeeDetails;
