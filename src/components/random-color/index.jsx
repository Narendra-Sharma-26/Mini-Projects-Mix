import { useEffect, useState } from "react"


export default function RandomColor () {

    const [typeOfColor,settypeOfColor] = useState("hex");
    const [color, setcolor] = useState("#000000");

    useEffect(()=>{
        if(typeOfColor === "rgb") handleCreateRandomRGBColor();
        else handleCreateRandomHexColor();
    },[typeOfColor])

    function randomColorUtility(length) {
        return Math.floor(Math.random()*length)
    }

    function handleCreateRandomHexColor() {
        const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
        let hexColor = "#";

        for (let i=0 ; i<6; i++){
            hexColor += hex[randomColorUtility(hex.length)]
        }

        setcolor(hexColor);
    }

    function handleCreateRandomRGBColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setcolor(`rgb(${r},${g},${b})`)
    }

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color,
        }}>
            <button onClick={()=>settypeOfColor('hex')}>Create HEX color</button>
            <button onClick={()=>settypeOfColor('rgb')}>Create RGB color</button>
            <button onClick={()=>typeOfColor === 'hex' ? handleCreateRandomHexColor() : handleCreateRandomRGBColor()}>Generate Random Color</button>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#ffff',
                fontSize: '60px',
                marginTop: '50px'
            }}>
                <h3>{typeOfColor === 'hex' ? "HEX color" : "RGB color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}