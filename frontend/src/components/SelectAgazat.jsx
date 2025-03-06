import { useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { use } from 'react';
import { useNavigate } from 'react-router-dom';


function SelectAgazat() {
    const [data, setdata] = useState([]);
    const [selectedAgazat, setselectedAgazat] = useState('');
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
        navigate('/Agazat/' + selectedAgazat);
    }

    return (
        <>
            <div>
                <form onSubmit={oldalAtiranyit}>
                <select value={selectedAgazat} onChange={e => setselectedAgazat(e.target.value)}>
                {data.map(agazat =>
                        <option value={agazat.nyek}>{agazat.nyek}</option>
                    )}
                </select>
                <button type="submit">Küldés</button>
                </form>
            </div>
        </>
    )
}

export default SelectAgazat

