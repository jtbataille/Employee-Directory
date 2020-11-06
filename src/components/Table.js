import React from 'react';
import TableHeaders from './TableHeaders';
import TableRows from './TableRows';


function Table ({ employees, ascFirstNameSort, descFirstNameSort, ascLastNameSort, descLastNameSort }) {
    return (
        <table style={{borderCollapse: "collapse", fontFamily: "arial, sans-serif", width: "100%"}}>
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