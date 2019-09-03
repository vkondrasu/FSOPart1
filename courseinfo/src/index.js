import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return(
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return  (
            <p>{props.details.name} {props.details.exercises}</p>
    )
}

const Content = (props) => {
    return  (
        <div>
           {props.parts.map(p => <Part key={p.name} details={p}/>)} 
        </div>
    )
}

function getSum(total, num){
    return total+num
}

const Total = (props) => {
    const numbers = props.parts.map( p => p.exercises)
    const total = numbers.reduce(getSum, 0)
    return  (
        <p>Number of exercises {total}</p>
    )
}

const App = () => {
  const course = {
      name: 'Half Stack application development',
      parts : [
      {
      name: 'Fundamentals of React',
      exercises : 10
  },
  {
    name: 'Using props to pass data',
    exercises : 7
}, {
    name: 'State of a component',
    exercises : 14
}
  ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))