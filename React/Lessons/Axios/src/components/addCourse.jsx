import React, { Component } from 'react'
import axios from 'axios'

export default class addCourse extends Component {

    state = {
        name: "",
        desc: ""
    }
    addCourse = (event) => {
        event.preventDefault();
        let newCourse = {
            courseName: event.target.courseName.value,
            courseDescription: event.target.courseDescription.value
        };
        event.target.courseName.value = '';
        event.target.courseDescription.value = '';
        this.props.addCourse(newCourse);
    }

    componentDidMount(){
        if (this.props.editRowId != null) {
            axios.get('http://localhost:5000/courses/' + this.props.editRowId).then(
                res => this.setState({name: res.data.courseName, desc: res.data.courseDescription})
            )
        }
        else{
            this.setState({name:"", desc: ""})
        }
    }

  render() {

    return (
        <div className="card p-3 mb-3">

        <form onSubmit={this.addCourse}>
            <div className="mb-3 mt-3">
                <label className="form-label">Course Name:</label>
                <input type="text" className="form-control" name="courseName" defaultValue={this.state.name}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Course Description:</label>
                <textarea type="text" className="form-control" name="courseDescription" defaultValue={this.state.desc}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    )
  }
}
