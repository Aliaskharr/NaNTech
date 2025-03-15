import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Profile = () => {
    let params = useParams();
    // let nav = useNavigate();
    // setTimeout(() => {
    //     nav('/')
    // }, 3000)
    console.log(params);
    
    return (
        <div className='container'>
            <div className="card">
                <div className="card-header">{params.username}</div>
            </div>
        </div>

    )
}

export default Profile;