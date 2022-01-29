import axios from "axios";
import EmployeeModel from "../Models/EmployeeModel";
import { addEmployeeAction, deleteEmployeeAction, fetchEmployeesAction, updateEmployeeAction } from "../Redux/EmployeesState";
import store from "../Redux/Store";
import config from "../Utils/Config";

class EmployeesService {

    public async fetchEmployees(): Promise<EmployeeModel[]> {
        if(store.getState().employeesState.employees.length === 0) {
            const response = await axios.get<EmployeeModel[]>(config.employeesUrl + "delayed");
            const employees = response.data;
            store.dispatch(fetchEmployeesAction(employees));
        }
        return store.getState().employeesState.employees;
    }

    public async deleteEmployee(id: number): Promise<void> {
        await axios.delete(config.employeesUrl + id);
         store.dispatch(deleteEmployeeAction(id));
    }

     public async getOneEmployee(id: number): Promise<EmployeeModel> {
        let employee = store.getState().employeesState.employees.find(e => e.id === id);
        if(!employee) {
            const response = await axios.get<EmployeeModel>(config.employeesUrl + id);
             employee = response.data;
        }
        return employee;
    }


    public async addEmployee(employee: EmployeeModel): Promise<EmployeeModel> {

        const formData = new FormData();
        formData.append("firstName", employee.firstName);
        formData.append("lastName", employee.lastName);
        formData.append("title", employee.title);
        formData.append("country", employee.country);
        formData.append("city", employee.city);
        formData.append("birthDate", employee.birthDate.toString());


        // Put the new employee to the server: 
        const response = await axios.post<EmployeeModel>(config.employeesUrl + employee.id, formData);
        const addededEmployee = response.data;

        // Add to redux global state: 
        store.dispatch(addEmployeeAction(addededEmployee));
        return addededEmployee;
    }



    public async updateEmployee(employee: EmployeeModel): Promise<EmployeeModel> {

        const formData = new FormData();
        formData.append("firstName", employee.firstName);
        formData.append("lastName", employee.lastName);
        formData.append("title", employee.title);
        formData.append("country", employee.country);
        formData.append("city", employee.city);
        formData.append("birthDate", employee.birthDate.toString());


        // Put the new employee to the server: 
        const response = await axios.put<EmployeeModel>(config.employeesUrl + employee.id, formData);
        const updatedEmployee = response.data;

        // Add to redux global state: 
        store.dispatch(updateEmployeeAction(updatedEmployee));
        return updatedEmployee;
    }
    
}

const employeesService = new EmployeesService();

export default employeesService;