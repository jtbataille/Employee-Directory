import React from 'react';


function Table ({ employees, ascNameSort, descNameSort }) {
    return (
        <table style={{borderCollapse: "collapse", fontFamily: "arial, sans-serif"}}>
            <tr style={{border: "3px solid #dddddd", textAlign: "left", padding: "10"}}>
                <th style={{backgroundColor: "#dddddd"}}>First Name
                    <span className="upSort" onClick={ascNameSort}> &#9650; </span>
                    <span className="upSort" onClick={descNameSort}> &#9660; </span>
                </th>
                <th style={{backgroundColor: "#dddddd"}}>Last Name
                    <span className="upSort" onClick={ascNameSort}> &#9650; </span>
                    <span className="upSort" onClick={descNameSort}> &#9660; </span>
                </th>
                <th>Company Role</th>
                <th style={{backgroundColor: "#dddddd"}}>Phone Number</th>
                <th>E-Mail Address</th>
            </tr>
            {employees.map(employee => (
                <tr key={employee.id} style={{marginRight: "10px"}}>
                    <td style={{backgroundColor: "#dddddd"}}>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td  style={{backgroundColor: "#dddddd"}}>{employee.role}</td>
                    <td>{employee.phone}</td>
                    <td  style={{backgroundColor: "#dddddd"}}>{employee.email}</td>
                </tr>
            ))}
        </table>
    )
}

export default Table;