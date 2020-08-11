const EMPLOYEE_DATA = "employeeData";

const __getData = () => {
  let employeeData = localStorage.getItem(EMPLOYEE_DATA);
  if (employeeData === null) {
    localStorage.setItem(EMPLOYEE_DATA, "[]");
    employeeData = localStorage.getItem(EMPLOYEE_DATA);
  }
  employeeData = JSON.parse(employeeData);
  return employeeData;
};

export const fetchEmployeeData = () => (dispatch) => {
  let employeeData = __getData();

  dispatch({ type: "FETCH_EMPLOYEE_DATA", payload: employeeData });
};

export const addToTable = (employee) => (dispatch) => {
  let employeeData = __getData(); //return dataset type is Json
  employeeData.push(employee);
  localStorage.setItem(EMPLOYEE_DATA, JSON.stringify(employeeData));

  dispatch({
    type: "FETCH_EMPLOYEE_DATA",
    payload: employeeData,
  });
};

export const removeFromTable = (employeeId) => (dispatch) => {
  let employeeData = __getData();
  employeeData = employeeData.filter(
    (employee) => Number(employee.id) !== Number(employeeId)
  );
  localStorage.setItem(EMPLOYEE_DATA, JSON.stringify(employeeData));
  dispatch({
    type: "FETCH_EMPLOYEE_DATA",
    payload: employeeData,
  });
};
