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
    return(
        <div>
            <header>
            <h1>Product Mania</h1>
            <Link to={"/new"}>Add New Product</Link>
            </header>
            {
                productList.map((product, index)=> (
                    <div>
                        <Link to = {`/products/${product._id}`}>{product.title}</Link>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <img src = {product.image}
                        />
                    </div>

                ))
            }
        </div>
    )
}
export default AllProducts;