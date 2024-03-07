import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const KonyvPut = ({ konyv, setKonyv, setFetchPending }) => {
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        try {
            axios.get(`https://localhost:5001/Konyv/${id}`).then(res => {
                setKonyv(res.data);
            })
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <div className='container w-50 mt-5'>
            <h1 className='text-center'>Könyv szerkesztése</h1>
            <form onSubmit={async (e) => {
                e.preventDefault();
                e.persist();
                const konyv = {
                    id: id,
                    nev: e.target.nev.value,
                    kiadasEve: e.target.kiadasEve.value,
                    ertekeles: e.target.ertekeles.value,
                    kepneve: e.target.kepneve.value
                }
                try {
                    var res = await axios.put(`https://localhost:5001/Konyv/${id}`, konyv).then(async () => {
                        await setFetchPending(true);
                    }).then(() => {
                        alert('Sikeres szerkesztés!');
                    });
                } catch (error) {
                    console.log(error);
                } finally {
                    navigate('/');
                }

            }} className='form-control'>
                <div className="mb-3">
                    <label htmlFor="nev" className="form-label">Könyv neve</label>
                    <input type="text" defaultValue={konyv.nev} className="form-control" id="nev" />
                </div>
                <div className="mb-3">
                    <label htmlFor="kiadasEve" className="form-label">Kiadás éve</label>
                    <input type="text" defaultValue={konyv.kiadasEve} className="form-control" id="kiadasEve" />
                </div>
                <div className="mb-3">
                    <label htmlFor="ertekeles" className="form-label">Könyv értékelése</label>
                    <input type="text" defaultValue={konyv.ertekeles} className="form-control" id="ertekeles" />
                </div>
                <div className="mb-3">
                    <label htmlFor="kepneve" className="form-label">Könyv kepek</label>
                    <input type="text" defaultValue={konyv.kepneve} className="form-control" id="kepneve" />
                </div>
                <button type="submit" className="btn btn-success">Könyv frissítése</button>
            </form>
        </div>
    )
}

export default KonyvPut