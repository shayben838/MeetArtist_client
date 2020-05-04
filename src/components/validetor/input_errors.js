import React from 'react';

export default props => {
    return (
        props.errors.map((error, i) => (
            <p key={i} className="mb-1 m-0 p-0" style={{color:"#343a40",fontSize:"12px"}}>
                {error}
            </p>
        ))
    );
}
