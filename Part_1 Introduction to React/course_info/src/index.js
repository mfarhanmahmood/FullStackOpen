import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return(
        <>
            <h1>{props.course}</h1>
        </>
    )
}

const Part = (props) => {
    return (
        <p><strong>Name:</strong> {props.name}, <strong>Exercises:</strong> {props.exercises}</p>    
    )
}

const Content = (props) => {
    return (
        <>
            <Part name={props.part1.name} exercises={props.part1.exercises} />
            <Part name={props.part2.name} exercises={props.part2.exercises} />
            <Part name={props.part3.name} exercises={props.part3.exercises} />
        </>
    )
}

const Footer = (props) => {
    return (
        <>
            <p>Total number of exercises are&nbsp; 
                {props.exercises1 + props.exercises2 + props.exercises3}.
            </p>
        </>
    )
}



const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10 
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }
    
    return (
        <div>
            <Header course={course} />
            <Content part1={part1} part2={part2} part3={part3} />
            <Footer exercises1={part1.exercises}
                    exercises2={part2.exercises}
                    exercises3={part3.exercises}
            />
        </div>
    )
}


ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
