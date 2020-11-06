import React from 'react';


function Table ({ employees }) {
    return (
        <table style={{borderCollapse: "collapse", fontFamily: "arial, sans-serif"}}>
            <tr style={{border: "3px solid #dddddd", textAlign: "left", padding: "10"}}>
                <th style={{backgroundColor: "#dddddd"}}>Name
                    <span className="upSort"> &#9650; </span>
                    <span className="upSort"> &#9660; </span>
                </th>
                <th>Company Role</th>
                <th style={{backgroundColor: "#dddddd"}}>Phone Number</th>
                <th>E-Mail Address</th>
            </tr>
            {employees.map(employee => (
                <tr key={employee.id} style={{marginRight: "10px"}}>
                    <td style={{backgroundColor: "#dddddd"}}>{employee.fullName}</td>
                    <td>{employee.role}</td>
                    <td style={{backgroundColor: "#dddddd"}}>{employee.phone}</td>
                    <td>{employee.email}</td>
                </tr>
            ))}
        </table>
    )
}

export default Table;