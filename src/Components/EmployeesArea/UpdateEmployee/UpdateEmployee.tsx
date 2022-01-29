import axios from "axios";
import { useForm } from "react-hook-form";
import { Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom";
import config from "../../../Utils/Config";
import "./UpdateEmployee.css";
import EmployeeModel from "../../../Models/EmployeeModel";
import { useEffect } from "react";
import employeesService from "../../../Services/EmployeesService";
import notify from "../../../Services/NotifyService";



function UpdateEmployee(): JSX.Element {
    const params = useParams();
    const id = Number(params.id);


    const { register, handleSubmit, formState, setValue } = useForm<EmployeeModel>();
    const navigate = useNavigate();

    useEffect(() => {
        employeesService.getOneEmployee(id)
            .then(employee => {
                setValue("firstName", employee.firstName);
                setValue("lastName", employee.lastName);
                setValue("title", employee.title);
                setValue("country", employee.country);
                setValue("city", employee.city);
                setValue("birthDate", employee.birthDate);
            })
             .catch(err => notify.error(err));
    }, []);
    

    async function submit(employee: EmployeeModel) {
        try {
          employee.id = id;
            await employeesService.updateEmployee(employee);
            notify.success("Employee updated");
            navigate("/employees/")

        }
         catch (err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="UpdateEmployee">
            <h3 className="title">Update Employee:</h3>

            <form onSubmit={handleSubmit(submit)}>
                <label> First Name:</label>
                    <input type="text" {...register("firstName", {
                    required: { value: true, message: "Missing first name" }
                })} />
                <span>{formState.errors.firstName?.message}</span>       
                                
                <br></br>
                <label> Last Name: </label>
                    <input type="text" {...register("lastName", {
                    required: { value: true, message: "Missing last name" }
                })} />
                <span>{formState.errors.firstName?.message}</span>       
                <br></br>
                <label> Title: </label>
                     <input type="text" {...register("title", {
                    required: { value: true, message: "Missing title" }
                })} />
                <span>{formState.errors.title?.message}</span>       
                <br></br>
                <label> Country: </label>
                    <input type="text" {...register("country")}></input>
                <br></br>
                <label> City: </label>
                    <input type="text" {...register("city")}></input>               
                <br></br>
                <label> Birth Date: </label>
                    <input type="Date" {...register("birthDate")}></input>
                <br></br>
                <button>Update</button>
            </form>
			
        </div>
    );
}

export default UpdateEmployee;
