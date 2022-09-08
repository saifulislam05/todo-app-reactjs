import React, { useEffect, useState } from 'react'
import todoimage from "../images/todo.svg"
import { MdOutlineDone } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';

const localItems = () => {
    const list = localStorage.getItem('lists');

    if (list) {
        return JSON.parse(localStorage.getItem('lists'));

    } else {
        return []
    }
}

function Todo() {

    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(localItems());
    const [doneItems, setDoneItems] = useState(localItems());
    const [toggleSubmit, setToggleSubmit] = useState(true)
    const [isEditItem, setIsEditItem] = useState(null)

    //Add new item
    const addItem = () => {
        if (!inputData) {
            alert('please fill the data')
        } else if (inputData && !toggleSubmit) {
            setItems(
                items.map((element) => {
                    if (element.id === isEditItem) {
                        const updataname = setItems(element.name = inputData)
                        setInputData('')
                        setToggleSubmit(true)
                        return { ...element, updataname }
                    }
                    return element;
                })
            )
        }

        else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData])
            setInputData('')
        }

    }
    // Delete single itme
    const deleteItem = (index) => {

        const updatedItems = items.filter((element) => {
            return index !== element.id
        })
        // setItems(updatedItems)
        console.log(updatedItems);
    }

    // work done functionality
    const doneItem = () => {

        setDoneItems(
            doneItems.map((element) => {
                if (element.id === isEditItem) {
                    const updataname = doneItems(element.name = items.name)

                    return { ...element, updataname }
                }
                // return element;
                console.log(element);
            })
        )
        // console.log(element.name);
        console.log(doneItems);

    }

    // edit item
    const editItem = (id) => {
        let newEditItem = items.find((element) => {
            return element.id === id

        });
        setToggleSubmit(false)
        setInputData(newEditItem.name)
        setIsEditItem(id)
        console.log(newEditItem);
    };
    // Update btn toggle
    // const updatebtn = () => {

    //     setToggleSubmit(() => toggleSubmit ? false : true)
    //     items.isEditItem.name=

    // }

    // delete all 
    const deleteAll = () => {
        setItems([]);
    }



    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(items))
    }, [items]);

    useEffect(() => {
        localStorage.setItem('doneList', JSON.stringify(doneItems))
    }, [doneItems]);

    return (
        <>
            <div className='main-div'>
                {/* add and delete functinality */}
                <div className='child-div'>
                    <figure>
                        <img src={todoimage} alt="todoimages" />
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <form action="">
                        <div className='addItems'>
                            <input id='inputbox' type="text" placeholder='✍ add item'
                                value={inputData}
                                onChange={(e) => setInputData(e.target.value)}
                            />
                            {
                                toggleSubmit ? <i className='fa fa-plus fa-beat add-btn' title='Add Item' onClick={addItem}></i> : <i className='fa fa-edit fa-beat add-btn' title='Update Item' onClick={addItem}></i>
                            }
                        </div>
                    </form>

                    <div className="showItems">
                        {
                            items.map((element) => {
                                return (
                                    <div className="eachItem" key={element.id}>
                                        <h3>{element.name}</h3>
                                        <div className='todo-btn fa-3x'>
                                            <FiEdit onClick={() => editItem(element.id)} />
                                            <MdOutlineDone onClick={() => doneItem(element)} />
                                            <RiDeleteBin6Line onClick={() => deleteItem(element.id)} />

                                        </div>


                                    </div>

                                )
                            })
                        }




                        <div className="showItems" onClick={deleteAll}>
                            <button className=' btn effect04' data-sm-link-text="Remove All" ><span>Check list</span></button>
                        </div>
                    </div>
                </div>

                {/* Done items are here  */}

                <div className="showItems">
                    <h1 className='text-6xl text-white'>work done</h1>
                    {
                        doneItems.map((element) => {
                            console.log(element.name);
                            return (
                                <div className="eachItem" key={element.id}>
                                    <h3>{element.name}</h3>


                                    <RiDeleteBin6Line size={"24px"} onClick={() => deleteItem(element.id)} />




                                </div>

                            )
                        })
                    }



                </div>


            </div>
        </>
    )
}

export default Todo