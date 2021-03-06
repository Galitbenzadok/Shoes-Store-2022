import EmployeeModel from "../Models/EmployeeModel";

export class EmployeesState {
    public employees: EmployeeModel[] = [];
}

export enum EmployeesActionType {
    FetchEmployees = "FetchEmployees",
    AddEmployee = "AddEmployee",
    UpdateEmployee = "UpdateEmployee",
    DeleteEmployee = "DeleteEmployee"
}

export interface EmployeesAction {
    type: EmployeesActionType;
    payload: any;
}


export function fetchEmployeesAction(employees: EmployeeModel[]): EmployeesAction {
    return { type: EmployeesActionType.FetchEmployees, payload: employees };
}
export function addEmployeeAction(employee: EmployeeModel): EmployeesAction {
    return { type: EmployeesActionType.AddEmployee, payload: employee };
}
export function updateEmployeeAction(employee: EmployeeModel): EmployeesAction {
    return { type: EmployeesActionType.UpdateEmployee, payload: employee };
}
export function deleteEmployeeAction(id: number): EmployeesAction {
    return { type: EmployeesActionType.DeleteEmployee, payload: id };
}


export function employeesReducer(currentState = new EmployeesState(), action: EmployeesAction): EmployeesState {

    const newState = { ...currentState };

    switch (action.type) {

        case EmployeesActionType.FetchEmployees:
            newState.employees = action.payload; // Here the payload is the employees list.
            break;

        case EmployeesActionType.AddEmployee:
            newState.employees.push(action.payload); // Here the payload is a single object to add.
            break;

        case EmployeesActionType.UpdateEmployee:
            const indexToUpdate = newState.employees.findIndex(p => p.id === action.payload.id); // Here the payload is a single object to update.
            if (indexToUpdate >= 0) {
                newState.employees[indexToUpdate] = action.payload;
            }
            break;

        case EmployeesActionType.DeleteEmployee:
            const indexToDelete = newState.employees.findIndex(p => p.id === action.payload); // Here the payload is the id to delete.
            if (indexToDelete >= 0) {
                newState.employees.splice(indexToDelete, 1);
            }
            break;
    }

    return newState;
}
