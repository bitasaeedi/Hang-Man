import React from 'react';

function Button({handleReset}) {

    return <>
        <div className="button" onClick={handleReset}>Reset Game</div>
    </>
}

export default Button;