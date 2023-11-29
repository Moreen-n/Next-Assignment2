import { useState } from 'react';

export default function StopWatch(){
    const [start, setStart] = useState(0);
    return(
        <div>
          <h1>Stopwatch</h1>  
        </div>
    );
}