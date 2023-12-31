import React, { useState } from "react";

export default function Form() {
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [depth, setDepth] = useState();
  const [thickness, setThickness] = useState();
  const [density, setDensity] = useState();
  const [answer, setAnswer] = useState("....");
  

  const heightSet = (event) => {
    setHeight((event.target.value)/1000);
    console.log(height);
  };
  const widthSet = (event) => {
    setWidth((event.target.value)/1000);
    console.log(width);
  };
  const depthSet = (event) => {
    setDepth((event.target.value)/1000);
    console.log(depth);
  };
  const thicknessSet = (event) => {
    setThickness((event.target.value)/1000);
    console.log(thickness);
  };
  const densitySet = (event) => {
    setDensity((event.target.value)/1000);
    console.log(density);
  };

  const frontPlate = () => {
    const answer1 = 3 * height * density * thickness * width;
    const answer2 = 2 * height * density * thickness * depth;
    const answer3 = 2  * density * thickness * depth * width;
   
    setAnswer(((answer1 + answer2 + answer3)*1000).toFixed(2))
    console.log((answer)*1000)

    
  };

  return (
    <>
      <div className="container">
        <h1 className="title">
          Panel Weight Calculator
        </h1>
        <div className="inputs">
          <div className="inp-1">
            <div className="inp-h inp">
              <h1>Enter The height</h1>
              <input type="number" placeholder="In mm" onChange={heightSet} />
            </div>

            <div className="inp-w inp">
              <h1>Enter The Width</h1>
              <input type="number" placeholder="In mm" onChange={widthSet} />
            </div>

            <div className="inp-den inp">
              <h1>Enter The Density</h1>
              <input type="number" placeholder="In kg/m3" onChange={densitySet} />
            </div>
          </div>

          <div className="inp-2">
            <div className="inp-d inp">
              <h1>Enter The Depth</h1>
              <input type="number" placeholder="In mm" onChange={depthSet} />
            </div>

            <div className="inp-t inp">
              <h1>Enter The Thickness</h1>
              <input
                type="number"
                placeholder="In mm"
                onChange={thicknessSet}
              />
            </div>
          </div>

          <button onClick={frontPlate} className="submit">
            Calculate
          </button>
        </div>
        <div className="ans">
          <h1 className="wt-text">
            The Weight of Panel is
            
          </h1>
          <div className="heightSet">
              <h1 className="ans-text">{answer} kg</h1>
            </div>
        </div>
      </div>
    </>
  );
}
