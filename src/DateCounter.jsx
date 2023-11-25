import React, { useState } from "react";

function addDays(theDate, days) {
    return new Date(theDate.getTime() + days*24*60*60*1000);
}

function DateCounter() {

    function Counter(){

        const [count,setCount] = useState(0);
        const [step,setStep] = useState(0);
        const [date,setDate] = useState({currentDate:new Date("june 21 2023")});
        return (
            <div style={{textAlign : 'center'}}>
                <button onClick={() => setCount((m) => m - 1)}>-</button>
                <span>Count {count}</span>
                <button onClick={() => setCount((p) => p + 1)}>+</button>
                <br/>
                <button onClick={() => setStep((m) => m - 1)}>-</button>
                <span>Steps {step}</span>
                <button onClick={() => 
                {
                    setStep((p) => p + 1);
                    setDate({...date,currentDate:addDays(date.currentDate,count)});
                }

                    }>+</button>
                <br/>
                <br/>
                <h2>{date?.currentDate.toDateString()}</h2>
            </div>
        );


    }

    return( <div>
        <Counter />
    </div>);
}


export default DateCounter;