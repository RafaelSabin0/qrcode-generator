import React from 'react';
import QRCode from 'react-qr-code';
import './styles.css';


export default function QRcodeResult (props){
    console.log(props.inputValue.length);

    if(props.inputValue.length > 0){
    
       return <QRCode value={props.inputValue}/>
    }
   
       return <h3>Type something to generate the QrCode</h3>
   
}




