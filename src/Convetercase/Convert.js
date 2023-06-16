import React, { useState } from "react"


function Convert() {


    const [myText,setMyText] =useState('');

    // onchange Event
    const Onchange=(event)=>{
        setMyText(event.target.value)
    }

//   Lower Case 
    const LowerCase =()=>{
        let newText=myText.toLowerCase();
        setMyText(newText);

    }

// UpperCase 
const UpperCase =()=>{
    let newText=myText.toUpperCase();
    setMyText(newText);

} 
 

// // Capitalize
const Capitalize =()=>{
    let newText=myText.replace(/(?:|\s)\S/g, function(a)
    {return a.toUpperCase();});
    setMyText(newText);

}
 

// Reverse 

const ReverseCase =()=>{
    let newText=myText.split('').reverse().join('');
    setMyText(newText);

} 


// Clear 

const Clear =()=>{
    setMyText('');
}


    
    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center heading mt-5">Convetercase</h1>
                <div className="line"></div>

                <form>
                    <div className="mb-3 mt-5">
                    
                        <textarea className="form-control" id="exampleFormControlTextarea1" onChange={Onchange} value={myText} rows="8"></textarea>
                    </div>

                    <div className="d-flex justify-content-center mt-5">
                    <button type="button" class="btn btn-primary me-3" onClick={LowerCase} >Lower Case</button>
                    <button type="button" class="btn btn-primary me-3" onClick={UpperCase}>Upper Case</button>
                    <button type="button" class="btn btn-primary me-3" onClick={Capitalize} >Capitalize</button>
                    <button type="button" class="btn btn-primary me-3" onClick={ReverseCase }>Reverse</button>
                    <button type="button" class="btn btn-primary me-3" onClick={Clear}>Clear</button>

                    </div>

                </form>

                <div className="mt-5">
                    <h1 className="text-center">
                        Calculate Length of Word and Character 
                    </h1>
                    <h1 className="text-center head">{myText.split(" ").length}Word and {myText.length}Character</h1>

                </div>
            </div>
        </>

    );
}

export default Convert;
