import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams, useNavigate} from "react-router-dom"


//axios, useEffect, useState, Link

const NewProduct = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const submitHandler = (e)=> {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", 
        {
            title,
            price,
            description
        })
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err)=>console.log(err));
    }

    return(
        <div>
            <header>
            <h1>Product Mania</h1>
            <Link to={"/new"}>Add New Product</Link>
            </header>
            New Product

            <form onSubmit={submitHandler}>
                <div>
                    <label>Title</label>
                    <input value = {title} onChange = {(e)=> setTitle(e.target.value)} type = "text"></input>
                </div>
                <div>
                    <label>Price</label>
                    <input value = {price} onChange = {(e)=> setPrice(e.target.value)} type = "text"></input>
                </div>
                <div>
                    <label>Description</label>
                    <input value = {description} onChange = {(e)=> setDescription(e.target.value)} type = "text"></input>
                </div>
                <button>Add Product</button>
            </form>
        </div>
    )
}
export default NewProduct;