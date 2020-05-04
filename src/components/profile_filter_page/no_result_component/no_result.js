import React from "react"

function NoResult() {
    return (
        <div className="pt-5 ml-2 mr-2"style={{textAlign:"center"}}>
            <i class="fas fa-search-minus" style={{fontSize:"50px"}}></i>
            <h1>No results found.</h1>
            <h6>Your search returned no results. Try shortening or rephrasing your search.</h6>

        </div>
    )
}
export default NoResult;