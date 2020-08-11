import React, { Component } from "react";
import { Card, Image, Button } from "semantic-ui-react";

import { connect } from "react-redux";
import { addToTable, removeFromTable } from "../../store/action/tableAction";

import "./EmployeeCard.scss";

class EmployeeCard extends Component {
  state = {
    isCompare: true,
  };

  componentDidMount() {
    this.setState({ isCompare: this.isExistInStorage(this.props.id) });
  }

  compareHandler = (data) => {
    let dataTable = JSON.parse(localStorage.getItem("employeeData"));
    if (dataTable.length < 4) {
      this.props.addToTable(data);
    } else {
      alert("You can compare four employees at most!");
    }
    this.setState({ isCompare: false });
  };

  removeHandler = (id) => {
    this.props.removeFromTable(id);
    this.setState({ isCompare: true });
  };

  isExistInStorage = (id) => {
    //this function checks whether the data had been chosen before or not!
    let dataTable = JSON.parse(localStorage.getItem("employeeData"));
    let employeeChosen = dataTable.filter(
      (employee) => Number(employee.id) === Number(id)
    );
    return !!!employeeChosen.length;
  };

  render() {
    return (
      <div className="p-5">
        <Card
          className={`${!this.state.isCompare ? "border-solid-blue" : ""} `}
        >
          <div className="container">
            <Image
              className="image"
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              wrapped
            />
            <div className="overlay">
              {this.state.isCompare ? (
                <Button
                  className="compare-button"
                  basic
                  onClick={(e) => this.compareHandler(this.props)}
                >
                  COMPARE
                </Button>
              ) : (
                <Button
                  className="compare-button"
                  basic
                  onClick={() => this.removeHandler(this.props.id)}
                >
                  REMOVE
                </Button>
              )}
            </div>
          </div>
          <Card.Header className="d-flex justify-content-space-between p-5">
            <span className="font-bold">{this.props.name}</span>
            <span className="color-light-green font-bold">
              ${this.props.salary}
            </span>
          </Card.Header>
          <Card.Meta>
            <span className="p-5">{this.props.age} years old</span>
          </Card.Meta>
        </Card>
      </div>
    );
  }
}

export default connect(null, { addToTable, removeFromTable })(EmployeeCard);
