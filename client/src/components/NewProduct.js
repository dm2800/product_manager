import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams, useNavigate} from "react-router-dom"


//axios, useEffect, useState, Link

const NewProduct = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const submitHandler = (e)=> {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", 
        {
            title,
            price,
            description,
            image
        })
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err)=>{
                console.log(err);
                console.log("err.response:", err.response);
                console.log("err.response.data", err.response.data);
                console.log("err.response.data.errors", err.response.data.errors);
                setErrors(err.response.data.errors);
            })
        }

    return(
        <div>
            <header>
            <h1>Products</h1>
            <Link to={"/"}
            style = {{color: "blue"}}
            >Home</Link>
            </header>
            New Product

            <form onSubmit={submitHandler}>
                <div>
                    <label>Title</label>
                    <input value = {title} onChange = {(e)=> setTitle(e.target.value)} type = "text"></input>

                {
                    errors.title?
                    <span>{errors.title.message}</span>
                    :null 
                }

                </div>
                <div>
                    <label>Price</label>
                    <input value = {price} onChange = {(e)=> setPrice(e.target.value)} type = "text"></input>
                {
                    errors.price?
                    <span>{errors.price.message}</span>
                    :null 
                }

                </div>
                <div>
                    <label>Description</label>
                    <input value = {description} onChange = {(e)=> setDescription(e.target.value)} type = "text"></input>
                {
                    errors.description?
                    <span>{errors.description.message}</span>
                    :null 
                }
                </div>
                <div>
                    <label>Image</label>
                    <input value = {image} onChange = {(e)=> setImage(e.target.value)} type = "text"></input>
                {
                    errors.image?
                    <span>{errors.image.message}</span>
                    :null 
                }
                </div>
                <button>Add Product</button>
            </form>
        </div>
    )
}

export default NewProduct;