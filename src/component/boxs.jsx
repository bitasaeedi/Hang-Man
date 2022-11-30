import React from 'react';

function Boxes({chosenWord,letters}) {

    let boxes=[...chosenWord.word].map((x,index)=>{
        return <div className="box" key={index}>
            {letters.includes(x)?x:""}
        </div>
    })

    return <>
        <div className="box-container">{boxes}</div>
    </>
}

export default Boxes;