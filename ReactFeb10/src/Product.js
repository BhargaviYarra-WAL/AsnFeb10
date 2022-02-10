import {useState,useEffect} from "react";
import PropTypes from "prop-types";
import axios from "axios";
const Product=(props)=>{
    let [product,setProduct]=useState([""]);
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${props.id}`).then((res)=>{
            console.log(res.data);
            setProduct(res.data);
        })
    },[]);
    return(
        <div className="Product">
           <h1>Ecommerce Application</h1>
           <div className="Super">
           <img src={product.image}/>
           <p>Product Id NO:{product.id}</p>
           <h2>{product.title}</h2>
           <p><strong>Category:{product.category}</strong></p>
           <p><strong>Price:{product.price}Rs</strong></p>
           <p><strong>About Product :<br/></strong>{product.description}</p>
           </div> 
        </div>
    )
}
Product.propTypes={
    productId:PropTypes.number,
}
export default Product;