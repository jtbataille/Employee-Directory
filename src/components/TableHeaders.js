import React from 'react';

function TableHeaders ({ ascFirstNameSort, descFirstNameSort, ascLastNameSort, descLastNameSort }) {
    return (
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
    )
}

export default TableHeaders;