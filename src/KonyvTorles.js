import React, {useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const KonyvTorles = ({ konyv, setKonyv, setFetchPending}) => {
    const { id } = useParams();
    const navigate = useNavigate();

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
                <Link onClick={() => {
                    axios.delete(`https://localhost:5001/Konyv/${id}`).then(async () => {
                        await setFetchPending(true);
                        navigate('/');
                    })
                }}  className="btn-danger">Törlés</Link>
                <Link to={`/`} className="btn btn-primary m-2">Mégsem</Link>
            </div>
        </div>
    )
}

export default KonyvTorles