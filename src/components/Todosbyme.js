import React from 'react'
import Todo from './Todo'

function Todosbyme() {
    return (
        <header className="w-full h-screen flex justify-center items-center">

            <div className="bg-gray-300 p-7  rounded-2xl w-4/12  h-3/6">
                <h1 className="text-3xl text-center font-bold  mb-3">Todo App</h1>
                <div className="flex justify-between mb-6">
                    <input type="text" placeholder="Todo" className="p-1 rounded-md bg-slate-50 focus:outline-none w-10/12" />
                    <Button btnText="Add" />
                </div>

                <div className="todos h-[80%] overflow-auto ... ">
                    <Todos />
                    <Todos />
                    <Todos />
                    <Todos />
                    <Todos />
                    <Todos />



                </div>
            </div>
        </header>
    )
}

export default Todosbyme