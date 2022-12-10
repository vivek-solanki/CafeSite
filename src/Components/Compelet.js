import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';

function Compelet() {
    const navigate = useNavigate();
    const logout = () => {
        navigate('/')
        localStorage.clear();
    }
    return (
        <>
            <div className='text-center mt-5'>
                <h1 className='mb-5'>Compelet Dashboard</h1>
                <button type="submit" onClick={logout} className='btn'>Logout</button>
            </div>
        </>
    )
}

export default Compelet;