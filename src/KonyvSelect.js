import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const KonyvSelect = ({ konyv, setKonyv }) => {

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
        <div className='container w-75 row justify-content-center mt-5' style={{ marginRight: 'auto', marginLeft: 'auto' }}>
            <div className="card m-3 text-center" style={{ width: '21rem' }}>
                <div className="card-body">
                    <p>A könyv neve: {konyv.nev}</p>
                    <h5>Kiadás éve: {konyv.kiadasEve}</h5>
                    <p>Könyv értékelése: {konyv.ertekeles}</p>
                    <img src={konyv.kepneve} className="img-thumbnail" style={{ width: '50%' }} />
                </div>
                <div>
                    <Link to={`/konyv-szerkesztese/${id}`} className="btn-primary"><i className="bi bi-pencil"></i></Link>
                    <Link to={`/konyv-torles/${id}`} className="btn-primary"><i className="bi bi-trash3"></i></Link>
                </div>
                <Link to={`/`} className="btn btn-primary m-2">Vissza a főoldalra</Link>
            </div>
        </div>
    )
}

export default KonyvSelect