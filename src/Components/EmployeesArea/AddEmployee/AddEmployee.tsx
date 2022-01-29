import axios from "axios";
import { useForm } from "react-hook-form";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import config from "../../../Utils/Config";
import "./AddEmployee.css";
import EmployeeModel from "../../../Models/EmployeeModel";
import notify from "../../../Services/NotifyService";



function AddEmployee(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<EmployeeModel>();
    const navigate = useNavigate();

    async function submit(employee: EmployeeModel) {
        try {
            const response = await axios.post<EmployeeModel>(config.employeesUrl, employee);
            // returns employee with id
            const addeEmployee = response.data;
            notify.success("Employee added");

            //redirect...
            navigate("/employees/")

        }
        catch (err: any) {
           notify.error(err)
        }
    }

    return (
        <div className="AddEmployee">
            <h3 className="title">Add Employee:</h3>

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
                <span>{formState.errors.lastName?.message}</span>       
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
                <button>Add</button>
            </form>
			
        </div>
    );
}

export default AddEmployee;
