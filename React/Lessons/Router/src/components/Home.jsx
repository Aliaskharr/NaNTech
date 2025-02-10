import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container'>
            <div className="card">
                <div className="card-header">Home</div>
                <Link className="card-body" to="/profile/nurlan">Nurlan</Link>
                <Link className="card-body" to="/profile/ilkin">Ilkin</Link>
                <div className="card-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aspernatur consectetur impedit sed soluta at est, alias eum ea laudantium nostrum, iusto quidem ipsa minus dolorem dolore excepturi itaque consequatur!</p></div>
            </div>
        </div>

    )
}

export default Home;