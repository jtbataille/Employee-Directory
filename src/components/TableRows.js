import React from 'react';

function TableRows ({ employees }) {
    return (
        <>
            {employees.map(employee => (
                <tr key={employee.id} style={{marginRight: "10px", paddingBottom: "15"}}>
                    <td style={{backgroundColor: "#dddddd"}}>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td  style={{backgroundColor: "#dddddd"}}>{employee.role}</td>
                    <td>{employee.phone}</td>
                    <td  style={{backgroundColor: "#dddddd"}}>{employee.email}</td>
                </tr>
            ))}
        </>
    )
}

export default TableRows;