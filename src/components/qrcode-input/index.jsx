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
        <TextField id="outlined-basic" label="Message" variant="outlined" onChange={handleInput}/>
        <QRcodeResult inputValue={input}/>
        </>
    );
}
