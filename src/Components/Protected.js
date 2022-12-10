import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Protected(props) {
    const { Component } = props
    const navigate = useNavigate();
    useEffect(() => {
        const name = localStorage.getItem('Name')
        if (!name) {
            navigate('/')
        }

    },)
    return (
        <div>
            <Component />
        </div>
    )
}

export default Protected;