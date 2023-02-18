import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import QRcodeResult from '../qrcode-image';
import './styles.css';



export default function QRcodeInput(){

    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    return(
        <>
        <div className="main-card">
        <h1 className="page-title">QRcode Generator</h1>
        <TextField className='qrcode-input' id="outlined-basic" label="Message" variant="outlined" onChange={handleInput}/>
        <QRcodeResult inputValue={input}/>
        <div className="download-section">
        <Button className="download-button">Download QRcode</Button>
        </div>
        </div>
        </>
    );
}
