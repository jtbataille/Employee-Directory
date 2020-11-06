import React from 'react';


function Table ({ employees, ascFirstNameSort, descFirstNameSort, ascLastNameSort, descLastNameSort }) {
    return (
        <table style={{borderCollapse: "collapse", fontFamily: "arial, sans-serif", width: "100%"}}>
            <tr style={{border: "3px solid #dddddd", textAlign: "left", padding: "10"}}>
                <th style={{backgroundColor: "#dddddd"}}>First Name
                    <span className="sort" onClick={ascFirstNameSort}> &#9650; </span>
                    <span className="sort" onClick={descFirstNameSort}> &#9660; </span>
                </th>
                <th style={{backgroundColor: "#dddddd"}}>Last Name
                    <span className="sort" onClick={ascLastNameSort}> &#9650; </span>
                    <span className="sort" onClick={descLastNameSort}> &#9660; </span>
                </th>
                <th>Company Role</th>
                <th style={{backgroundColor: "#dddddd"}}>Phone Number</th>
                <th>E-Mail Address</th>
            </tr>
            {employees.map(employee => (
                <tr key={employee.id} style={{marginRight: "10px", paddingBottom: "15"}}>
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