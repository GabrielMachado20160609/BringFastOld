import React, {useState, useEffect} from 'react';
import Login from './Auth/Login';

const Home: React.FC = () => {
    const [stage, setStage] = useState("")

    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
            margin: 0,
            padding: 0,
            backgroundColor: "#E3F2FD"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 1000,
                height: 500,
                padding: "50px, 0, 50px",
                backgroundColor: "#fff",
            }}>
                <Login/>
            </div>
        </div>)
}

export default Home;