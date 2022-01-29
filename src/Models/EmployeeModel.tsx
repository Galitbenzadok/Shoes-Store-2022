class EmployeeModel {

    public id: number = 0;
    public firstName: string = "";
    public lastName: string = "";
    public title: string = "";
    public country: string = "";
    public city: string = "";
    public birthDate: string | Date = "";
    public imageName: string = "";  
}

export default EmployeeModel;