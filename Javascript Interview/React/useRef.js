//-------------------------EXAMPLE 3----------------------------//

import React, { useState, useEffect, useRef } from 'react';

export default function App() {
    const [name, setName] = useState('');
    const prevName = useRef('');

    useEffect(() => {
        prevName.current = name
    }, [name])
    
    return (
        <>
            <input value={name} onChange={e => setName(e.target.value)} />
            <div>My Name is { name } and it used to be {prevName.current}</div>
        </>
    )
}

//-------------------------EXAMPLE 3----------------------------//

//-------------------------EXAMPLE 2----------------------------//

// import React, { useState, useEffect, useRef } from 'react';

// export default function App() {
//     const [name, setName] = useState('');
//     const inputRef = useRef(0);

//     function focus() {
//         inputRef.current.focus();
//         console.log(inputRef.current);
//     }
    
//     return (
//         <>
//             <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
//             <div>My Name is { name }</div>
//             <button onClick={focus}>Focus</button>

//         </>
//     )
// }

//-------------------------EXAMPLE 2----------------------------//


//-------------------------EXAMPLE 1----------------------------//

// import React, { useState, useEffect, useRef } from "react";

// export default function App() {
//   const [name, setName] = useState("");
//   const renderCount = useRef(0);

//   useEffect(() => {
//     renderCount.current += 1;
//   });

//   return (
//     <>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <div>My Name is {name}</div>
//       <div>I rendered {renderCount.current} times</div>
//     </>
//   );
// }

//-------------------------EXAMPLE 1----------------------------//
