"use client"; // This is a client component
import { ChangeEvent, MouseEvent, useState } from "react";
import "./globals.css";

///event preventDefault()สำคัญถ้าไม่มีเว็บมันจะรีเฟรชทุกครั้งที่ป้อนinputเข้าไปแล้วกดsubmit มันจะไม่เก็บinputไว้/***
export default function HomePage() {
  const [text, setText] = useState('');
  const [size, setSize] = useState(200);
  const [margin, setMargin] = useState(0);
  const [colorDark,setColorDark] = useState('#000000')
  const [colorLight,setColorLight] = useState('#ffffff')
  const [errorCorrection, setErrorCorrection] = useState("Medium");
  function saveSize(e) {
    setSize(parseInt(e.target.value));
  }


  let removeColorDark = colorDark.replace('#','')
  
  function defaultText(item){
    ()=>setText(item.text)
  }
  return (
    <div className="main-bg">

      <div className="menu">
        <div className="menu-bar">
          <h3>Generate QR Code</h3>
        </div>
      </div>

      <div className="QR">
        <div className="subQR">

          <div className="QR-img">
            <div>
              {text !== ''? <img src={`https://quickchart.io/qr?text=${text}&size=${size}&margin=${margin}
                                &dark=${removeColorDark}&light=${colorLight.replace('#','')}&ecLevel=${errorCorrection}`} /> : defaultText()}
            </div>
          </div>

          <div className="saveQR">
            <div className="input-inline">
              <label>Text or URL : </label>
              <input className="input" type="text" value={text} placeholder="Text or URL" onChange={(event) => setText(event.target.value)}/>
            </div>
            <div className="input-inline">
              <label>Size(px) : </label> 
              <input className="input-focusBlack" type="number" onKeyDown={(e)=>e.preventDefault()} value={size} min={50} step={5} max={500} onChange={saveSize} />
            </div>
            <div className="input-inline">
              <label>Margin(Blocks) : </label>
              <input className="input-focusBlack" type="number" onKeyDown={(e)=>e.preventDefault()} value={margin} min={0} step={1} max={15} onChange={(e)=>setMargin(parseInt(e.target.value))}/>
            </div>
            <div className="input-inline">
              <label>Color (foreground) : </label>
              <input className="inputColor" type="color" value={colorDark} onChange={(e)=>setColorDark(e.target.value)} />
            </div>
            <div className="input-inline">
              <label>Color (background) : </label>
              <input className="inputColor" type="color" value={colorLight} onChange={(e)=>setColorLight(e.target.value)} />
            </div>
            <div className="input-inline">
            <label>Error Correction : </label>
              <select className="input-focusBlack" value={errorCorrection} onChange={(e) => setErrorCorrection(e.target.value)}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="Quartile">Quartile</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
            {/* <button onClick={saveQR} style={btnColor}>Generate QR!</button> */}

        </div>
      </div>
    </div>
  );
}
