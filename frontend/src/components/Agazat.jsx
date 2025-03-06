import { useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { use } from 'react';

function Agazat() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/Agazat")
        .then((response) => {
          setdata(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    })


    return (
        <>
            <Table striped bordered hover>
            <thead>
                <tr>
                  <th>Tanulo neve</th>
                  <th>Ágazat</th>
                  <th>Összes pontszám</th>
                </tr>
            </thead>
            <tbody>
              {data.map(diak =>
                <tr>
                  <td>{diak.neve}</td>
                  <td>{diak.agazat}</td>
                  <td>{diak.pontszam}pont</td>
                </tr>
                )}
            </tbody>
            </Table>
        </>
    )
}

export default Agazat
