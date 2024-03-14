import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Konyvek from './Konyvek';
import Navbar from './Navbar';
import KonyvPost from './KonyvPost';
import KonyvSelect from './KonyvSelect';
import KonyvPut from './KonyvPut';
import KonyvTorles from './KonyvTorles';

function App() {

  const [konyvek, setKonyvek] = React.useState([]);
  const [konyv, setKonyv] = React.useState({});
  const [fetchPending, setFetchPending] = React.useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://localhost:5001/Konyv');
      setKonyvek(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setFetchPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [fetchPending]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Konyvek konyvek={konyvek} setKonyvek={setKonyvek} konyv={konyv} setKonyv={setKonyv} />} />
          <Route path="/konyv" element={<Konyvek konyvek={konyvek} setKonyvek={setKonyvek} konyv={konyv} setKonyv={setKonyv} />} />
          <Route path="/konyv/:id" element={<KonyvSelect konyvek={konyvek} setKonyvek={setKonyvek} konyv={konyv} setKonyv={setKonyv} />} />
          <Route path="/uj-konyv" element={<KonyvPost setFetchPending={setFetchPending} />} />
          <Route path="/konyv-szerkesztese/:id" element={<KonyvPut konyv={konyv} setKonyv={setKonyv} setFetchPending={setFetchPending} />} />
          <Route path="/konyv-torles/:id" element={<KonyvTorles setFetchPending={setFetchPending} konyv={konyv} setKonyv={setKonyv} />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
