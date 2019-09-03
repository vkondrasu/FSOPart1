import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    return(
        <div>
            <h1>Greetings</h1>
            <Hello/>
        </div>
    )
}

const Hello = () => {
    const now = new Date()

   return  (
    <div>
        <p>Hello world, it is {now.toString()}</p>
    </div>
)}

ReactDOM.render(<App />, document.getElementById('root'));
