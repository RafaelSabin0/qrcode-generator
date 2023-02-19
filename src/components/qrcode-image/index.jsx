import React from 'react';
import { Button } from '@mui/material';
import QRCode from 'react-qr-code';
import { toPng } from 'html-to-image';
import './styles.css';


export default function QRcodeResult (props){

    const canvas = document.getElementById("qr-code-img");
    
    const downloadQr = () =>{
      if(canvas === null) {
         return
      }
      console.log(canvas)
      toPng(canvas)
      .then((dataUrl) => {
         const link = document.createElement('a');
         link.style.display = 'none';
         link.href = dataUrl;
         link.download = 'mything.png';
         link.click();
      })

   } 

    if(props.inputValue.length === 0){
      return <div className="message-box"></div>
    }

    return (
      <>
      <QRCode id="qr-code-img" className="qrcode-result" value={props.inputValue}/>
      <div className="button-box">
      <Button className="download-button" onClick={downloadQr}>Download QRcode</Button>
      </div>
      </>

      )
   
   
}




