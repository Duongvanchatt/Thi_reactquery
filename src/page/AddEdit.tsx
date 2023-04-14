
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { useAddProductMutation, useEditProductMutation, useProductQuery } from '../services/service';
import { useEffect, useState } from 'react';

const inittialState = {
    name: "",
    price: 0,
    image: "",
    desc: "",
};
const AddEditProduct = () => {

    const [formValue, setFormValue] = useState(inittialState);
    const [editModle, setEditModel] = useState(false);
    const [addProduct] = useAddProductMutation();
    const [updateProduct] = useEditProductMutation();
    const {name, price, image, desc} = formValue;
    const navigate = useNavigate();
    const {id} = useParams();
    const {data} = useProductQuery(id!);
    

    useEffect (() => {
        if(id) {
            setEditModel(true);
            if(data) {
                setFormValue({...data});
            }else{
                setEditModel(false);
                setFormValue({...inittialState});
            }
        }
    }, [id, data]);

    const handleSubmit = async (e:any) =>{
        e.preventDefault();
        if(!name && !price && !image && !desc) {
            alert("false");
        }else{
            if(!editModle){
                await addProduct(formValue);
                alert("thêm thành công");
                navigate("/");
            }else{
                await updateProduct(formValue);
                navigate("/")
                setEditModel(false);
                alert("sửa thành công")
            }
        }
    };
    const handleInputChange = (e: any) =>{
        let {name, value} = e.target;
        setFormValue({...formValue, [name]: value});
    };
    return (
        <div>
           <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={name || ""} onChange={handleInputChange}/>

            <label htmlFor="price">Price</label>
            <input type="number" id="price" name="price" value={price || ""} onChange={handleInputChange}/>

            <label htmlFor="image">Image</label>
            <input type="text" id="image" name="image" value={image || ""} onChange={handleInputChange}/>

            <label htmlFor="desc">Desc</label>
            <input type="text" id="desc" name="desc" value={desc || ""} onChange={handleInputChange}/>


            <input type="submit" value={id ? "Update" : "Save"}/>
           </form>
        </div>   
    );
};

export default AddEditProduct;