import { useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { use } from 'react';
import { useNavigate } from 'react-router-dom';


function Agazatok() {
    const [data, setdata] = useState([]);
    const [Agazatok, setAgazatok] = useState('');
    let navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:3001/SelectAgazat")
        .then((response) => {
          setdata(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    const oldalAtiranyit = (event) => {
        event.preventDefault();
        navigate('/SelectAgazat/' +Agazatok );
    }

    return (
        <>
            <div>
                <form onSubmit={oldalAtiranyit}>
                <select value={Agazatok} onChange={e => setAgazatok(e.target.value)}>
                {data.map(diak =>
                        <option value={diak.agazat}>{diak.agazat}</option>
                    )}
                </select>
                <button type="submit">Küldés</button>
                </form>
            </div>
        </>
    )
}

export default Agazatok

