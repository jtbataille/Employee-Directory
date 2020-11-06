import React from 'react';

function TableRows ({ employees }) {
    return (
        <>
            {employees.map(employee => (
                <tr key={employee.id} style={{paddingBottom:"30px", borderCollapse:"collapse", border:"solid", borderWidth:"1px"}}>
                    <td style={{backgroundColor:"#dddddd", paddingBottom:"30px", paddingLeft:"5px", borderCollapse:"collapse", border:"solid", borderWidth:"1px"}}>{employee.firstName}</td>
                    <td style={{paddingBottom:"30px", paddingLeft:"5px", borderCollapse:"collapse", border:"solid", borderWidth:"1px"}}>{employee.lastName}</td>
                    <td  style={{backgroundColor:"#dddddd", paddingBottom:"30px", paddingLeft:"5px", borderCollapse:"collapse", border:"solid", borderWidth:"1px"}}>{employee.role}</td>
                    <td style={{paddingBottom:"30px", paddingLeft:"5px", borderCollapse:"collapse", border:"solid", borderWidth:"1px"}}>{employee.phone}</td>
                    <td  style={{backgroundColor:"#dddddd", paddingBottom:"30px", paddingLeft:"5px", borderCollapse:"collapse", border:"solid", borderWidth:"1px"}}>{employee.email}</td>
                </tr>
            ))}
        </>
    )
}

export default TableRows;