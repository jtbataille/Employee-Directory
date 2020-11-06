import React from 'react';

function TableHeaders ({ ascFirstNameSort, descFirstNameSort, ascLastNameSort, descLastNameSort }) {
    return (
        <tr style={{border: "3px solid #dddddd", textAlign: "left", borderCollapse:"collapse", borderWidth:"1px"}}>
            <th style={{backgroundColor: "#dddddd", borderCollapse:"collapse", border:"solid", borderWidth:"1px", paddingLeft:"5px"}}>First Name
                <span className="sort" onClick={ascFirstNameSort}> &#9650; </span>
                <span className="sort" onClick={descFirstNameSort}> &#9660; </span>
            </th>
            <th style={{backgroundColor: "#dddddd", borderCollapse:"collapse", border:"solid", borderWidth:"1px", paddingLeft:"5px"}}>Last Name
                <span className="sort" onClick={ascLastNameSort}> &#9650; </span>
                <span className="sort" onClick={descLastNameSort}> &#9660; </span>
            </th>
            <th style={{borderCollapse:"collapse", border:"solid", borderWidth:"1px", paddingLeft:"5px"}}>Company Role</th>
            <th style={{backgroundColor: "#dddddd", borderCollapse:"collapse", border:"solid", borderWidth:"1px", paddingLeft:"5px"}}>Phone Number</th>
            <th style={{borderCollapse:"collapse", border:"solid", borderWidth:"1px", paddingLeft:"5px"}}>E-Mail Address</th>
        </tr>
    )
}

export default TableHeaders;