import { useState } from "react"
import QRCode from "react-qr-code";

export default function QRCodeGenerator(){

    const [qrCode, setqrCode] = useState('');
    const [input, setinput] = useState('');

    function handleGenerateQRCode(){
        setqrCode(input)
        setinput('')
    }

    return <div>
        <h1>QR Code Generator</h1>
        <div>
            <input onChange={(e)=>setinput(e.target.value)} type="text" name="qr-code" value={input} placeholder="Enter your value here"></input>
            <button disabled={input && input.trim() !== '' ? false : true} onClick={handleGenerateQRCode}>Generate</button>
        </div>
        <div>
            <QRCode 
            id="qr-code-value"
            value={qrCode}
            size={400}
            bgColor="#fff"
            />
        </div>
    </div>
}