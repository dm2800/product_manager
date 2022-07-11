import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom"


//axios, useEffect, useState, Link

const AllProducts = (props) => {

    const [productList, setProductList] = useState([]);
    
    useEffect(()=> (props)=> {
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
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                    </div>

                ))
            }
        </div>
    )
}
export default AllProducts;