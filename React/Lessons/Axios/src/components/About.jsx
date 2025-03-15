import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    // let nav = useNavigate();
    // setTimeout(() => {
    //     nav('/')
    // }, 3000)
    return (
        <div className='container'>
            <div className="card">
                <div className="card-header">About</div>
                <div className="card-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aspernatur consectetur impedit sed soluta at est, alias eum ea laudantium nostrum, iusto quidem ipsa minus dolorem dolore excepturi itaque consequatur!</p></div>
            </div>
        </div>

    )
}

export default About;