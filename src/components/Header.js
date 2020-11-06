import React from 'react';


function Header() {
    return (
        <header style={{textAlign:"center", width:"100%", backgroundColor:"black", color:"white", borderBottom:"15px solid rgb(126,73,162)", paddingTop:"30px", paddingBottom:"15px"}}>
            <h1>Employee Directory</h1>

            <h5 style={{fontStyle:"italic", paddingTop:"10px"}}>Search for employees alphabetically by clicking the areas or by typing some information in the search bar!</h5>
        </header>
    )
}

export default Header;