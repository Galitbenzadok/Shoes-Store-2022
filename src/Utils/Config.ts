class Config {

}

class DevelopmentConfig extends Config {
    public employeesUrl ="http://localhost:3030/api/employees/";
    public employeesImageUrl = "http://localhost:3030/api/employees/images/";
    public contactsUrl = "http://localhost:3030/api/contact-us/"

}

class ProductionConfig extends Config {
    public employeesUrl ="http://www.northwind.com/api/employees/";
    public employeesImageUrl = "http://www.northwind.com/api/employees/images/";
    public contactsUrl = "http://www.northwind.com/api/contact-us/";


}

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig()

export default config;