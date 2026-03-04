import React, { useState } from 'react';

function ClickCounter() {
    const [count, setCount] = useState(0);
    
    return (
    <div>
        <button onClick={() => setCount(count + 1)}>
            Clicky Clicky
        </button>
        <p>
            You have clickied the clicker {count} times.
        </p>
    </div>
    )
}

export default ClickCounter;