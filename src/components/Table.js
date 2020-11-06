import React from 'react';
import TableHeaders from './TableHeaders';
import TableRows from './TableRows';


function Table ({ employees, ascFirstNameSort, descFirstNameSort, ascLastNameSort, descLastNameSort }) {
    return (
        <table style={{borderCollapse:"collapse", border:"solid", borderWidth:"1px", fontFamily:"arial, sans-serif", width:"100%", margin:"20px"}}>
            <TableHeaders
                ascFirstNameSort={ascFirstNameSort}
                descFirstNameSort={descFirstNameSort}
                ascLastNameSort={ascLastNameSort}
                descLastNameSort={descLastNameSort}
            />
            <TableRows
                employees={employees}
            />
        </table>
    )
}

export default Table;