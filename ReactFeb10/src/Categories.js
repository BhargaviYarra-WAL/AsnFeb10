import {useState,useEffect} from "react";
import axios from "axios";
const Categories=()=>{
    let [category,setCategory]=useState([""])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/categories").then((res)=>{
            console.log(res.data);
            setCategory(res.data);
        })
    },[]);
    return(
        <div className="Categories">
            <h1>All Categories</h1>
        {category.map((val)=>{
            return(
                <div><p>{val}</p></div>
            )
        })}
        </div>
        
    )
}
export default Categories;