import React from 'react'

function Button({color, colorName, setColor}) {
  return (
    <div>
        <button
              onClick={() => setColor(color)}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor: color}}>
              {colorName}
        </button>
    </div>
  )
}

export default Button