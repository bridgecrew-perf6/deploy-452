import axios from "axios";

const EMPLOYEE_API_BASE_URL = "https://murmuring-lake-94113.herokuapp.com/api/bootcamp";

class EmployeeService {
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }
  createEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }
}
export default new EmployeeService();
