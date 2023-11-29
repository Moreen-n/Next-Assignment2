import { useState } from 'react';

export default function StopWatch(){
    const [count, setCount] = useState(0);
    return(
        <div>
          <h1>Stopwatch</h1>  
          <div>
            <p id='count'>{count} Seconds</p>
            <button onClick={() => {
            setCount(count +1);
          }}>start</button>
            <button>stop</button>
            <button  onClick={() => {
            setCount(0);
          }}>clear</button>
          </div>
        </div>
    );
}