import React, {useState} from 'react';

function Info({chosenWord,letters,remaining}) {
    let boxes=letters.map((x,index)=>{
        if (![...chosenWord.word].includes(x)){
            return <span key={index}>{x},</span>
        }
    })
    return <>
        <div className="hint">Hint : {chosenWord.hint}</div>
        <div className="hint">Remaining guesses : {remaining}</div>
        <div className="hint">Wrong letters : {boxes}</div>
    </>
}

export default Info;