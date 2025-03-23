import React, { Component } from 'react';
import axios from 'axios';
import Course from './Course';
import './Courses.css';

import AddCourse from './addCourse';

class Courses extends Component {

    state = {
        courses: null,
        showForm: null,
        editRowId : null
    }

    componentDidMount() {
        axios.get('http://localhost:5000/courses').then(res => {
            this.setState({ courses: res.data });
        });
    }

    addCourse = (data) => {

        if (this.state.editRowId == null) {
            axios.post('http://localhost:5000/courses', data).then(res => {
                this.setState({ courses: this.state.courses.concat(res.data), showForm: false })
            }).catch(err => {
                console.log(err);
            })
        }

        else{
            axios.put('http://localhost:5000/courses/' + this.state.editRowId, data).then(res => {
                const oldCourses = this.state.courses;
                const upCourse = oldCourses.find(x => { return x.courseId == this.state.editRowId });
                upCourse.courseName = data.courseName; // !!!bir massivden find ve ya filter bir datani bir deyere menimsedende, sonra o deyeri deyisende avtomatik olarak hemin massivin icindeki o deyere sahib olan data da deyisir!!!
                upCourse.courseDescription = data.courseDescription;
                this.setState({courses: oldCourses, showForm: false })
            }).catch(err => {
                console.log(err);
            })
        }

    }

    removeCourse = (id) => {
        axios.delete('http://localhost:5000/courses/' + id).then(
            res => this.setState({ courses: this.state.courses.filter(x => { return x.courseId != id }) }))
    }

    editCard = (id) => {
        this.setState({showForm: true, editRowId: id})

    }

    render() {
        return (
            <div className='container mt-3'>

                <button className='btn btn-primary mb-3 ms-auto d-block' onClick={() => { this.setState({ showForm: !this.state.showForm, editRowId: null }) }}>
                    {this.state.showForm ? "Show List" : "Add Data"}
                </button>

                {
                    this.state.showForm ?
                        <AddCourse addCourse={this.addCourse} editRowId={this.state.editRowId}/>
                        :

                        <div className="row">
                            {
                                this.state.courses != null ?
                                    this.state.courses.map(course => {
                                        return (
                                            <Course course={course} key={course.courseId} removeCourse={this.removeCourse} editCard={this.editCard} />
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
