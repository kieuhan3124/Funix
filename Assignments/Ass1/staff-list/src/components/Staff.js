import React from 'react';
import dateFormat from "dateformat";

class Staff extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="border col-sm-4">
                <table>
                    <tr><td>{this.props.staff.name}</td></tr>
                    <tr><td>{dateFormat(this.props.staff.doB, "dd/mm/yyyy")}</td></tr>
                    <tr><td>{this.props.staff.salaryScale}</td></tr>
                    <tr><td>{this.props.staff.overTime}</td></tr>
                    <tr><td>{dateFormat(this.props.staff.startDate, "dd/mm/yyyy")}</td></tr>
                </table>
                </div>;
    }
}

export default Staff;