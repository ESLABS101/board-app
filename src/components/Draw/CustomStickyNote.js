import React, { useState } from 'react';
import { Popover } from 'react-bootstrap';
import { DrawingColors } from "../../utils/DrawingColor";

const CustomStickyNote = ({ setSelectedColor }) => {

  const [selectedShape, setSelectedShape] = useState(null);
  const customStyleBox = {
    'display':'grid',
    'gridTemplateColumns':'1fr 1fr'
  }
  return (
    <Popover id="popover-basic">
      <Popover.Body>
        <div style={customStyleBox}>
          {DrawingColors.map((color) => (
            <div
              key={color.color}
              onClick={() => {setSelectedColor(color.color);}}
              style={{
                backgroundColor: color.color,
                width: '24px',
                height: '24px',
                margin: '6px',
                cursor: 'pointer',
                boxShadow: selectedShape === color.color ? '0 0 0 2px #000' : 'none',
              }}
              title={color.title}
            ></div>
          ))}
        </div>
      </Popover.Body>
    </Popover>
  );
};

export default CustomStickyNote;