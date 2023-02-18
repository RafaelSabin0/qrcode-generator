import React from 'react';
import QRCode from 'react-qr-code';
import './styles.css';


export default function QRcodeResult (props){
    console.log(props.inputValue.length);

    if(props.inputValue.length > 0){
    
       return <QRCode className="qrcode-result" value={props.inputValue}/>
    }
   
       return <div className="message-box"></div>
   
}




