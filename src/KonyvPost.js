import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const KonyvPost = ({ setFetchPending }) => {

  const navigate = useNavigate();

  return (
    <div className='container w-50 mt-5'>
      <h1 className='text-center'>Könyv hozzáadása</h1>
      <form onSubmit={async (e) => {
        e.preventDefault();
        e.persist();
        const konyv = {
          nev: e.target.nev.value,
          kiadasEve: e.target.kiadasEve.value,
          ertekeles: e.target.ertekeles.value,
          kepneve: e.target.kepneve.value
        }
      try {
        var res = await axios.post('https://localhost:5001/Konyv', konyv).then(async () => {
          await setFetchPending(true);
        }).then(() => {
          alert('Sikeres hozzáadás!');
        });
      } catch (error) {
        console.log(error);
      } finally {
        navigate('/');
      }

      }} className='form-control'>
        <div className="mb-3">
          <label htmlFor="nev" className="form-label">Könyv neve</label>
          <input type="text" className="form-control" id="nev" />
        </div>
        <div className="mb-3">
          <label htmlFor="kiadasEve" className="form-label">Kiadás éve</label>
          <input type="text" className="form-control" id="kiadasEve" />
        </div>
        <div className="mb-3">
          <label htmlFor="ertekeles" className="form-label">Könyv értékelése</label>
          <input type="text" className="form-control" id="ertekeles" />
        </div>
        <div className="mb-3">
          <label htmlFor="kepneve" className="form-label">Könyv kepek</label>
          <input type="text" className="form-control" id="kepneve" />
        </div>
        <button type="submit" className="btn btn-success">Könyv hozzáadása</button>
      </form>
    </div>
  )
}

export default KonyvPost