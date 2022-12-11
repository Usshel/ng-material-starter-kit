import {EmployeeModel} from "../models/employee.model";

export interface EmployeeResponse {
  status: string,
  data: EmployeeModel[],
  message: string,


}
