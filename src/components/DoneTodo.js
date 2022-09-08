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

const doneLocalItems = () => {
    const doneList = localStorage.getItem('doneList');

    if (doneList) {
        return JSON.parse(localStorage.getItem('doneList'));

    } else {
        return []
    }
}



function DoneTodo() {

    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(localItems());
    const [doneItems, setDoneItems] = useState(doneLocalItems());
    const [toggleSubmit, setToggleSubmit] = useState(true)
    const [isEditItem, setIsEditItem] = useState(null)
    // console.log(doneItems);
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
        setItems(updatedItems)
        // console.log(updatedItems);
    }

    // work done functionality


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

    const doneItem = (id) => {
        let newEditItem = items.find((element) => {
            return element.id === id

        });





        setIsEditItem(id)
        console.log(newEditItem);


        setDoneItems(
            doneItems.map((element) => {
                if (element.id === isEditItem) {


                    return { ...element }
                }
                return element;
            })
        )
    };



    // Done todo list 
    // const doneItem = (id) => {


    //     setDoneItems(
    //         doneItems.map((element) => {
    //             if (element.id === isEditItem) {
    //                 const updataname = setItems(element.name = isEditItem.name)


    //                 return { ...element, updataname }
    //             }
    //             return element;
    //         })
    //     )

    //     console.log(doneItems);
    // };

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
                                            <MdOutlineDone onClick={() => doneItem(element.id)} />
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
                    {/* {
                        doneItems.map((element) => {
                            return (
                                <div className="eachItem" key={element.id}>
                                    <h3>{element.name}</h3>
                                    <div className='todo-btn fa-3x'>
                                        <FiEdit onClick={() => editItem(element.id)} />
                                        <MdOutlineDone onClick={() => doneItem(element.id)} />
                                        <RiDeleteBin6Line onClick={() => deleteItem(element.id)} />

                                    </div>


                                </div>

                            )
                        })
                    } */}

                    {doneItems.name}




                    {/* <div className="eachItem" key={doneItems.id}>
                        <h3>{doneItems.name}</h3>

                        <RiDeleteBin6Line size={"24px"} onClick={() => deleteItem(doneItems.id)} />

                    </div> */}

                </div>


            </div>
        </>
    )
}

export default DoneTodo