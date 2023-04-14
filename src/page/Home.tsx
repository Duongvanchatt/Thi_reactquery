import {Link} from 'react-router-dom';
import {toast} from "react-toastify";
import { useProductsQuery, useDeleteProductMutation } from '../services/service';
import { useEffect } from 'react';
const Home = () => {

    const {data, error} = useProductsQuery();
    const [deleteProduct] = useDeleteProductMutation();

    const handleDelete = async (id:any) => {
        await deleteProduct(id);
        if(window.confirm("bạn muốn xóa")){
            toast.success("xóa thành công");
        }
    }
    return (
        <div>
            <Link to="/add">
            <button>Thêm</button>
            </Link>
            <br/>

            <table border={1}>
                <thead>
                    <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                    <th>image</th>
                    <th>description</th>
                    <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {data && data.map((item: any, index: any) => {
                        return (
                            <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td><img src={item.image} width={50} alt="" /></td>
                            <td>{item.desc}</td>
                            <td>
                                <Link to={`/edit/${item.id}`}><button>Sửa</button></Link>
                                
                                <button onClick={() => handleDelete(item.id)}>Xóa</button>
                            </td>
                            </tr>
                        )
                    })}
                   
                    
                </tbody>
            </table>
        </div>   
    )
}

export default Home;