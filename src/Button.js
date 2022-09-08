import React from 'react'

function Button({ btnText }) {
    return (
        <button className="ml-2 px-2 py-1 bg-slate-800 text-white rounded-md">{btnText}</button>
    )
}

export default Button