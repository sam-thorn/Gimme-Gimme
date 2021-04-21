import React, { useState } from 'react'
import { HexColorPicker, HexColorInput } from 'react-colorful'

function ColorPicker () {
  const [color, setColor] = useState('#CC8899')
  return (
    <div>

      <section className="color-picker-layout">
        {/* <RgbaColorPicker color={color} onChange={setColor} /> */}
        <HexColorPicker color={color} onChange={setColor} />
        <HexColorInput type='text' color={color} onChange={setColor} />

      </section>

    </div>
  )
}

export default ColorPicker
