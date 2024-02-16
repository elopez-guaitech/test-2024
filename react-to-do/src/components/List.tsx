/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import { useEffect, useState } from "react";

const Lista = () => {
    const baseUrl = 'http://localhost:8080/api/tasks';
    const [resp, setResp] = useState<any>(null);

    const fetchData = () => {
        axios.get(baseUrl)
            .then(response => {
                setResp(response.data);
            })
            .catch(err => {
                console.log(err);    
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">TO-DO List</h5>
                {resp && resp.length > 0 && (
                    <ul className="list-group">
                        {resp.map((task: any) => (
                            <li key={task.id} className="list-group-item">
                                {task.name} - {task.description}
                            </li>
                        ))}
                    </ul>
                )}
                <a href="#" className="btn btn-primary mt-3">Agregar Tarea</a>
            </div>
        </div>
    );
};

export default Lista;
