import React, { Component } from 'react';
import axios from 'axios';
import Course from './Course';
import './Courses.css';

import AddCourse from './addCourse';

class Courses extends Component {

    state = {
        courses: null,
        showForm: null
    }

    componentDidMount() {
        axios.get('http://localhost:5000/courses').then(res => {
            this.setState({ courses: res.data });
        });
    }

    addCourse = (data) => {

        axios.post('http://localhost:5000/courses', data).then(res => {
            this.setState({ courses: this.state.courses.concat(res.data), showForm: false })
        }).catch(err => {
            console.log(err);
        })
        console.log('clicked');
    }

    removeCourse = (id) => {
        axios.delete('http://localhost:5000/courses/' + id).then(
            res => this.setState({ courses: this.state.courses.filter(x=> {return x.courseId != id})}))
    }

    render() {
        console.log('render course');

        return (

            <div className='container mt-3'>

                <button className='btn btn-primary mb-3 ms-auto d-block' onClick={ () => {this.setState({showForm: !this.state.showForm})}}>
                    {this.state.showForm ? "Show List" : "Add Data"}
                </button>

                {
                    this.state.showForm ?
                        <AddCourse addCourse={this.addCourse} />
                        :

                        <div className="row">
                            {
                                this.state.courses != null ?
                                    this.state.courses.map(course => {
                                        return (
                                            <Course course={course} key={course.courseId} removeCourse={this.removeCourse}/>
                                        )
                                    })
                                    : ''
                            }
                        </div>
                }


            </div>

        )
    }
}

export default Courses;
