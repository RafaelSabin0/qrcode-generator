import { TextField } from '@mui/material';
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
        <div className="qrcode-box">
        <QRcodeResult id="qr-code-img" inputValue={input}/>
        </div>
        </div>
        </>
    );
}
