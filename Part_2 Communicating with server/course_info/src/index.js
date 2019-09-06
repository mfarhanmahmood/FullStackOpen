import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <>
            <h2>{props.courseName}</h2>
        </>
    )
}

const Part = (props) => {
    return (
        <p><strong>Name:</strong> {props.name}, <strong>Exercises:</strong> {props.exercises}</p>
    )
}

const Content = ({parts}) => {

    const total = parts.reduce((sum, curr) =>  sum + curr.exercises, 0)

    return (
        <>
            {parts.map(
                (part) => (
                    <Part key={part.id} name={part.name} exercises={part.exercises}/>
                )
            )}
            <p>Total of {total} exercises.</p>
        </>
    )
}


const Course = ({course}) => {
    return (
        <div>
            <Header courseName = {course.name} />
            <Content parts={course.parts} />
        </div>
    )
}


const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    return (
        <>
            <h1>Courses</h1>
            <div>
                {courses.map((course) => <Course key={course.id} course={course} />)}
            </div>
        </>
    )

}

ReactDOM.render(<App />, document.getElementById('root'));

