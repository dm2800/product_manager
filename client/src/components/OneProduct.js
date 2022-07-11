import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom"


//axios, useEffect, useState, Link

const OneProduct = (props) => {


    const [product, setProduct] = useState({});

    const{id} = useParams();
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setProduct(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [id])

    return(
        <div>
            <header>
            <h1>{product.title}</h1>
            <Link to={"/new"}>Add New Product</Link>
            </header>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <img src = {product.image}></img>
        </div>
    )
}
export default OneProduct;