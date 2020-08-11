import React, { Component } from "react";
import { Table, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  fetchEmployeeData,
  removeFromTable,
} from "../../store/action/tableAction";

class EmployeeTable extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.props.fetchEmployeeData();
  };
  render() {
    return (
      <div>
        {this.props.tableData && this.props.tableData.length === 0 ? (
          <Message
            color="red"
            icon="inbox"
            header="No employee chosen yet!"
            content="Tab COMPARE to add employees to the comparing table"
          />
        ) : (
          <Table definition>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                {this.props.tableData &&
                  this.props.tableData.map((item, index) => (
                    <Table.HeaderCell key={index}>
                      Employee #{index + 1}
                    </Table.HeaderCell>
                  ))}
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>Name</Table.Cell>
                {this.props.tableData &&
                  this.props.tableData.map((item, index) => {
                    return <Table.Cell key={index}>{item.name}</Table.Cell>;
                  })}
              </Table.Row>
              <Table.Row>
                <Table.Cell>Age</Table.Cell>
                {this.props.tableData &&
                  this.props.tableData.map((item, index) => {
                    return <Table.Cell key={index}>{item.age}</Table.Cell>;
                  })}
              </Table.Row>
              <Table.Row>
                <Table.Cell>Salary</Table.Cell>
                {this.props.tableData &&
                  this.props.tableData.map((item, index) => {
                    return (
                      <Table.Cell
                        className="bg-light-green font-bold"
                        key={index}
                      >
                        $ {item.salary}
                      </Table.Cell>
                    );
                  })}
              </Table.Row>
            </Table.Body>
          </Table>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tableData: state.table && state.table.table,
  };
};

export default connect(mapStateToProps, {
  fetchEmployeeData,
  removeFromTable,
})(EmployeeTable);
