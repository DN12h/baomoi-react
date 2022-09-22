import axios from 'axios';
import { Fragment, useState } from 'react';

function CategoryCreate() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleAddCategory = () => {
        axios
            .post(
                'http://localhost:8080/api/category/add',
                {
                    name: name,
                },
                {
                    withCredentials: true,
                },
            )
            .then((res) => setMessage(res.data.message));
    };

    return (
        <Fragment>
            <label>name</label>
            <input onChange={(e) => setName(e.target.value)} />
            <button onClick={handleAddCategory}>Add</button>
            {message && <div>{message}</div>}
        </Fragment>
    );
}

export default CategoryCreate;
