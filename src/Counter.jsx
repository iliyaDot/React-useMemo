import React, { useState, useMemo } from 'react'

// nabayad logic ba estefade az usememo besazim in kar ghalate . dar soorati estefade mishe bara zaman haye ke sorat behbod bedim .

function wordCounte(word) {
    let i = 0;
    do {
        i++
    } while (i <= 999999999)

    return word.length;
}


export default function Counter() {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    //const randomNumber = useMemo(() => Math.random() * counter1, [counter1]) // dovomi dependency hastesh ke mige bara kodom ghesmate ke bayad hatman bashe vagarna usememo kar nmikone
    


    //const randomNumber = Math.random() * counter1;

    const count = useMemo(() => wordCounte('js'), [])

    return (
        <div>
            <p>Word Count: {count}</p>
            {/* <p>Random number is: {randomNumber}</p> */}
            <p>Click count1: {counter1}</p>
            <p>Click count2: {counter2}</p>
            <div>
                <button onClick={() => setCounter1(c => c + 1)}>Increament1</button>
                <button onClick={() => setCounter1(c => c - 1)}>Decrease1</button>
            </div>
            <div>
                <button onClick={() => setCounter2(c => c + 1)}>Increament2</button>
                <button onClick={() => setCounter2(c => c - 1)}>Decrease2</button>
            </div>
        </div>
    )
}
