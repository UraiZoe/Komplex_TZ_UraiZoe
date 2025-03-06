//használt elemek
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from "axios"
import 'tachyons'
//css
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
//Elemek
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Képek
import oktatasiHivatal from "/img/logo.png"; 
import email from "/img/e-mail-marketing-2745489__340.jpg"
//Komponensek
import Agazat from '../components/Agazat';


function Agazat() {
  const { id } = useParams()
  const [agazat, setAgazat] = useState([]);
  useEffect(() => {
      axios.get(`http://localhost:3001/SelectAgazat/` + id)
          .then(function (response) {
            setAgazat(response.data);
              //console.log(response);
          })
          .catch(function (error) {
              console.log(error);
          });
  }, []);
  console.log(agazat);
  
  return (
    <>
     <Container>
        <div>
            <Row>
                <Col>
                <article id="doboz" class="cf ph3 ph8-ns pv4 bg-green">
                    <header class="fn fl-ns w-90-ns pr4-ns">
                        <h3 class="mb4 mt0 lh-title">Központi felvételi tájékoztató</h3>
                    </header>
                    <div class="w-80-ns">
                        <p class="lh-copy measure mt4 mt0-ns">
                        A középiskolákba történő jelentkezés során az iskolák határozzák meg, hogy a felvételi rangsort mi alapján döntik el.
                        A Jószakma Szakgimnázium a felvételi során az általános iskolából hozott és a központi felvételin szerzett pontok alapján
                        rangsorolja az iskolába jelentkezőket.
                        </p>
                        <a href="https://www.oktatas.hu/kozneveles/kozepfoku_felveteli_eljaras/kozepfoku_felveteli_eljaras_informacioi">Tájákoztató oldal</a>
                        <img src={oktatasiHivatal} alt="Oktatási Hivatal" />
                    </div>
                </article>
                </Col>
                <Col>
                <article class="cf ph3 ph8-ns pv4">
                    <header class="fn fl-ns w-90-ns pr4-ns">
                        <h3 class="mb3 mt0 lh-title">Tájékoztatás</h3>
                    </header>
                    <div class="w-80-ns">
                        <h6 class="mb3 mt0 lh-title">Tájékoztatás</h6>
                        <p class="lh-copy measure mt4 mt0-ns">A központi felvételit magyar nyelv és irodalom, illetve matematika
                            tantárgyakból írják a jelentkezők. Mindkét tárgy esetén legfeljebb 50 pont szerezhető. A felvételiző hozott
                            pontjait az általános iskolai év végi eredményei alapján számolják, ez a pontszám legfeljebb 50 pont lehet.
                            A hozott pontokat duplázzák. A központi felvételin szerzett és a hozott pontok összege adja a felvételiző összesített pontszámát.</p>
                        <img src={email} alt="Két ágyas"/>
                    </div>
                </article>
                </Col>
            </Row> 
        </div>
        
      </Container>
    <Col>
      <Table striped bordered hover>
            <thead>
                <tr>
                  <th>Tanulo neve</th>
                  <th>Ágazat</th>
                  <th>Összes pontszám</th>
                </tr>
            </thead>
            <tbody>
              {agazat.map(diak =>
                <tr>
                  <td>{diak.neve}</td>
                  <td>{diak.agazat}</td>
                  <td>{diak.pontszam}</td>
                </tr>
                )}
            </tbody>
        </Table>
    </Col>
    </>
  )
}

export default Agazat
