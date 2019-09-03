import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({name, handler}) => {
  
    return (
      <button onClick={handler}> {name} </button>
    )
  }

  const Statistic = ({label, value, metric}) => {
    
      return (
        <tr>
        <td>{label}</td>
        <td>{value}{metric}</td>
        </tr>
      )
    }

const Statistics = ({good, neutral, bad, all}) => {
    
    return(
        <div>
        <h1> statistics </h1>
        { all > 0 &&
            <table>
            <tbody>
        <Statistic label="good" value={good}/>
        <Statistic label="neutral" value={neutral}/>
        <Statistic label="bad" value={bad}/>
        <Statistic label="all" value={all}/>
        <Statistic label="average" value={(good-bad)/all}/>
        <Statistic label="positive" value={good/all * 100} metric="%"/>
        </tbody>
        </table>
        }
        {all === 0 &&
        <p> No feedback given </p>
        }
        </div>
    )
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
  
    const goodFeedback = () =>{
        setGood(good+1)
        setAll(all+1)
    }
  
    const  neutralFeedback = () =>{
      setNeutral(neutral+1)
      setAll(all+1)
  }

const badFeedback = () =>{
    setBad(bad+1)
    setAll(all+1)
}

  return (
    <div>
      <h1> give feedback</h1>
      <Button name="good" handler={goodFeedback}/>
      <Button name="neutral" handler={neutralFeedback}/>
      <Button name="bad" handler={badFeedback}/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)