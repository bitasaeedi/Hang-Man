import React, {useEffect, useRef, useState} from 'react';
import Boxes from "./boxs";
import Info from "./info";
import Button from "./button";
import swal from 'sweetalert';
function Container(props) {
    let [words,setWords]=useState([
        {word:"pizza" ,length:5,hint:"Italian food"},
        {word:"piano" ,length:5 , hint:"an instrument"},
        {word:"python" ,length:6,hint:"programming language"},
        {word:"blue",length:4,hint:"a color"},
        {word:"tea" ,length:3 ,hint:"Iranian favorite drink"},
        {word:"zara" ,length:4 ,hint:"a clothing brand"}
    ])

    let [chosenWord,setChosenWord]=useState(Math.floor(Math.random() *7))
    let [loggedLetters,setLoggedLetters]=useState([]);
    let [remaining,setRemainig]=useState(6);
    let [win,setWin]=useState(false);
    //handle  reset button
    function handleReset(){
        setChosenWord(Math.floor(Math.random() *7))
        setLoggedLetters([])
        setRemainig(6);
    }
    //handle entered letter
    let ref=useRef(null);
    useEffect(()=>{
        ref.current.focus();
    })
    function handleEnterLetter(e){
        setLoggedLetters([...loggedLetters,e.key]);
        if(![...words[chosenWord].word].includes(e.key)){
            setRemainig(--remaining);
        }
    }
    //win or lose
    useEffect(()=>{
        console.log(chosenWord)
        if(remaining===0){
            swal({
                title: "Oops...!",
                text: "You cant guess the word!",
                icon: "error",
            }).then(handleReset);
        }

        let flag=true;
        [...words[chosenWord].word].map((l)=>{
            if(!loggedLetters.includes(l)){
                flag=false;
            }
        })
        if (flag&&loggedLetters){
            swal({
                title: "Good job!",
                text: "You guess the word!",
                icon: "success",
            }).then(handleReset);
        }
    })
    return <>
        <div className="container" onKeyDown={handleEnterLetter} tabIndex={1} ref={ref}>
            {/*title*/}
            <h5 className="title">
                Guess the Word
            </h5>
            {/*main*/}
            <div className="main">
               <Boxes chosenWord={words[chosenWord]} letters={loggedLetters}/>
                <Info chosenWord={words[chosenWord]} letters={loggedLetters} remaining={remaining}/>
                <Button handleReset={handleReset} />
            </div>

        </div>
    </>
}

export default Container;