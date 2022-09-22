import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Category() {
    const [categories, setCategories] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/category/', {
                withCredentials: true,
            })
            .then((res) => setCategories(res.data.data));
    }, [message]);
    console.log(message);
    const handleDelete = (e, id) => {
        e.preventDefault();
        axios
            .delete(`http://localhost:8080/api/category/del/${id}`, { withCredentials: true })
            .then((res) => setMessage(res.data.message));
    };

    return (
        <div>
            <Link to="/admin/category/add">Add</Link>
            <table style={{ border: '1px' }}>
                <thead>
                    <tr>
                        <td>STT</td>
                        <td>Name</td>
                        <td></td>
                    </tr>
                </thead>

                <tbody>
                    {categories.map((category, index) => {
                        return (
                            <tr key={category.id}>
                                <td>{index + 1}</td>
                                <td>{category.name}</td>
                                <td>
                                    <button onClick={(e) => handleDelete(e, category.id)}>Delete</button>
                                    <button>Edit</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Category;
