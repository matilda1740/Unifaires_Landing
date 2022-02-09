import React, { useState, Fragment } from 'react';
// import { styled } from '@mui/material/styles'; //Input Field
// import MuiInput from '@mui/material/Input';//Input Field
import { Slider } from '@mui/material';

export default function PricingSliderSection() {
    function valuetext(value) {
    return `${"Users"}°C`;
    }

    // SET SLIDER STATE
    const [sliderValue, setSliderValue] = useState(30);
    // CHANGE REACT STATE
    const handleSliderChange = (event, newValue) => {
    console.log("State Changed", newValue)
    setSliderValue(newValue);
    };

    // SLIDER INPUT VALUES
//     const Input = styled(MuiInput)`
//     width: 20%;
//     `;
//     const handleInputChange = (event) => {
//     console.log("Slider State Changed using Input", newValue)
//     setSliderValue(event.target.value === '' ? '' : Number(event.target.value));
//   };
  return (
      <div className="pricing_slider_div">
          <Slider
            aria-label="Users"
            defaultValue={150}
            // aria-valuetext="Users"
            getAriaValueText={valuetext}
            step={50}
            marks
            min={100}
            max={1000}
            valueLabelDisplay="on" //To always display the label
            // CSS styles
            sx={{ color: '#5832DA', width: '80%', height: '8px', margin: ''}}
            // STATE RELATED Props
            onChange={handleSliderChange}
            />
         {/* <Input
      //       // value={value}
      //       size="small"
      //       onChange={handleInputChange}
      //       // onBlur={handleBlur}
      //       inputProps={{
      //         step: 10,
      //         min: 0,
      //         max: 100,
      //         type: 'number',
      //         'aria-labelledby': 'input-slider',
      //       }}
      //     /> */}           
      </div>  
  );
}