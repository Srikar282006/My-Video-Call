
import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import "../App.css"
import { Button, IconButton,TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';
// import TextField from '@mui/material';

 function HomeComponent() {

    let navigate= useNavigate();
    const [meetingCode, setMeetingCode] = useState("");
    const {addToUserHistory}= useContext(AuthContext);
    let handleJoinVideoCall = async() =>{
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }
    return ( 
       < >
       <div className="navBar">
        <div style={{display: "flex", alignItems: "center"}}>

            <h3>My Video Call</h3>
        </div>
        <div style={{display:"flex",alignItems: "center"}}>
          <IconButton onClick={
            ()=> {
                navigate("/history")
            }
          }>
            <RestoreIcon />
            <p>History</p>
            </IconButton>  
            <Button onClick={() =>{
            localStorage.removeItem("token")
            navigate("/auth")   
            }}>
                Logout
            </Button>
        </div>

       </div>

       <div className="meetContainer">

        <div className="leftPanel">
            <div>
                <h2>Providing Quality Video CAll okna??</h2>
                <div style={{display: 'flex', gap : "10px"}}>
                    <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variants="outlined" />
                        <Button onClick={handleJoinVideoCall} variant='contained'>Join Madara's </Button>

                </div>
            </div>
        </div>
        <div className="rightPanel">
            <img srcSet="/logo3.png" alt="" />
        </div>
       </div>
       </>
     );
}

export default withAuth(HomeComponent)

