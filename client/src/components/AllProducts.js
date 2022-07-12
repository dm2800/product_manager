import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom"


//axios, useEffect, useState, Link

const AllProducts = (props) => {

    const [productList, setProductList] = useState([]);

    
    useEffect(()=> {
        axios.get("http://localhost:8000/api/products")
        .then((res)=> {
            console.log(res);
            console.log(res.data);
            setProductList(res.data);
        })
        .catch((err)=> console.log(err))
    }, [])

    const deleteProduct = (idFromBelow)=> {
        //react we must handle the front end 
        axios.delete(`http://localhost:8000/api/products/${idFromBelow}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setProductList(productList.filter((product, index)=> product._id !== idFromBelow))
            })
            .catch((err)=> console.log(err));
    }

    return(
        <div>
            <header>
            <h1>Products</h1>
            <Link to={"/new"}
            style = {{color: "blue"}}
            >Add New Product</Link>
            </header>
            {
                productList.map((product, index)=> (
                    <div>
                        <Link to = {`/products/${product._id}`}>{product.title}</Link>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <img src = {product.image}
                        />
                        <Link to= {`/products/edit/${product._id}`}>Edit</Link>
                        <button onClick={()=> deleteProduct(product._id)}>Delete</button>
                    </div>

                ))
            }
        </div>
    )
}
export default AllProducts;