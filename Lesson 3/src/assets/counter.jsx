export default function useState() { 
    const {counter,setCounter} = useState(0);

    const addOne = () => {

        setCounter(c => c + 1);

    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={addOne}>Next</button>
             <button onClick={addOne}>Next++</button>
        </div>
    );
}