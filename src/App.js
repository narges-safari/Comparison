import React, { Component } from "react";
import { Card, Container } from "semantic-ui-react";

import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";

import { connect } from "react-redux";
import { getEmployee } from "./store/action/employeeActions";

class App extends Component {
  state = {
    list: null,
  };

  componentDidMount() {
    this.getEmployeeList();
  }
  componentWillUnmount() {
    localStorage.setItem("employeeData", "[]");
  }
  getEmployeeList = () => {
    this.props.getEmployee().then((res) => {
      this.setState({ list: res.data.data });
    });
  };

  render() {
    return (
      <div className="bg-grey p-20">
        <Card.Group
          className="d-flex justify-content-center w-100 m-auto"
          itemsPerRow={4}
        >
          {this.state.list &&
            this.state.list.map((item, index) => (
              <EmployeeCard
                id={item.id}
                key={index}
                name={item.employee_name}
                age={item.employee_age}
                salary={item.employee_salary}
              />
            ))}
        </Card.Group>
        <div>
          <Container>
            <EmployeeTable />
          </Container>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     employeelist: state.employeelist && state.employeelist.data.data,
//   };
// };

export default connect(null, { getEmployee })(App);
