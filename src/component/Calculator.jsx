import React from 'react'
import { useState } from 'react'
import './calculator.css'


const calculator = () => {

    const [val, setval] =  useState("")

    
    const backspace = ()=> {
        try{
            setval(val.slice(0, -1))
        }catch(error){
            setval("")
        }
    }

    const calculate = ()=>{
        try {
            setval(eval(val))
        } catch (error) {
            setval(error)
        }
    }

    return (
        <div>
            <div className="container mt-5">
    <div className="row">
        <div className="col-12">
            <h1 className='display-6 fw-bold text-center text-primary'>Calculator</h1>
            <hr />
        </div>

        <div className="row justify-content-center mt-5">
            <div className="col-12 col-md-6 col-lg-4">
                <div className="card shadow pt-3 mb-3">
                    <div className="card-body text-primary">
                        <input type="text" className='input form-control form-control-lg text-center bg-light fs-4 shadow text-primary' value={val} readOnly />
                        <div className="row mt-4">
                            <div className="col-3 col-sm-3 col-md-3">
                                <button className="btn btn-light text-primary shadow p-3 fs-4 w-100" value="1" onClick={(e) => setval(val + e.target.value)}>1</button>
                            </div>

                            <div className="col-3 col-sm-3 col-md-3">
                                <button className="btn btn-light text-primary shadow p-3 fs-4 w-100" value="2" onClick={(e) => setval(val + e.target.value)}>2</button>
                            </div>

                            <div className="col-3 col-sm-3 col-md-3">
                                <button className="btn btn-light text-primary shadow p-3 fs-4 w-100" value="3" onClick={(e) => setval(val + e.target.value)}>3</button>
                            </div>

                            <div className="col-3 col-sm-3 col-md-3">
                                <button className="btn btn-light text-primary shadow px-4 py-3 fs-4 w-100" value="C" onClick={() => backspace()}>C</button>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-3 col-sm-3 col-md-3">
                                <button className="btn btn-light text-primary shadow p-3 fs-4 w-100" value="4" onClick={(e) => setval(val + e.target.value)}>4</button>
                            </div>

                            <div className="col-3 col-sm-3 col-md-3">
                                <button className="btn btn-light text-primary shadow p-3 fs-4 w-100" value="5" onClick={(e) => setval(val + e.target.value)}>5</button>
                            </div>

                            <div className="col-3 col-sm-3 col-md-3">
                                <button className="btn btn-light text-primary shadow p-3 fs-4 w-100" value="6" onClick={(e) => setval(val + e.target.value)}>6</button>
                            </div>

                            <div className="col-3 col-sm-3 col-md-3">
                                <button className="btn btn-light text-primary shadow px-4 py-3 fs-4 w-100" value="+" onClick={(e) => setval(val + e.target.value)}>+</button>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-3 col-sm-3 col-md-3">
                                <button className="btn btn-light text-primary shadow p-3 fs-4 w-100" value="7" onClick={(e) => setval(val + e.target.value)}>7</button>
                            </div>

                            <div className="col-3 col-sm-3 col-md-3">
                                <button className="btn btn-light text-primary shadow p-3 fs-4 w-100" value="8" onClick={(e) => setval(val + e.target.value)}>8</button>
                            </div>

                            <div className="col-3 col-sm-3 col-md-3">
                                <button className="btn btn-light text-primary shadow p-3 fs-4 w-100" value="9" onClick={(e) => setval(val + e.target.value)}>9</button>
                            </div>

                            <div className="col-3 col-sm-3 col-md-3">
                                <button className="btn btn-light text-primary shadow px-4 py-3 fs-4 w-100" value="*" onClick={(e) => setval(val + e.target.value)}>x</button>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-3 col-sm-3 col-md-3">
                                <button className="btn btn-light text-primary shadow p-3 fs-4 w-100" value="." onClick={(e) => setval(val + e.target.value)}>.</button>
                            </div>

                            <div className="col-3 col-sm-3 col-md-3">
                                <button className="btn btn-light text-primary shadow p-3 fs-4 w-100" value="0" onClick={(e) => setval(val + e.target.value)}>0</button>
                            </div>

                            <div className="col-3 col-sm-3 col-md-3">
                                <button className="btn btn-light text-primary shadow p-3 fs-4 w-100" value="-" onClick={(e) => setval(val + e.target.value)}>-</button>
                            </div>

                            <div className="col-3 col-sm-3 col-md-3">
                                <button className="btn btn-light text-primary shadow px-4 py-3 fs-4 w-100" value="/" onClick={(e) => setval(val + e.target.value)}>/</button>
                            </div>
                        </div>
                        <div className="row mt-3 justify-content-center">
                            <div className="col-3 text-center">
                            <button className="btn btn-light text-primary shadow p-3 fs-4 w-100" value="=" onClick={() => calculate()}>=</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        </div>
    )
}

export default calculator