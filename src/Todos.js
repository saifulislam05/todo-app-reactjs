import React from 'react'
import Button from './Button'

function Todos() {
    return (
        <div className="flex rounded-md shadow-inner  shadow-gray-700 p-1  mb-3">
            <div className="w-8/12"><h3>I need to take some food</h3></div>
            <div className="w-4/12 flex justify-between"><Button btnText="Edit" /><Button btnText="Delete" /></div>

        </div>
    )
}

export default Todos