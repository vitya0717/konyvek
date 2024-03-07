import React from 'react'
import { Link } from 'react-router-dom';

const Konyvek = ({ konyvek, setKonyv }) => {
    return (
        <div className=' container w-75 row justify-content-center mt-5' style={{ marginRight: 'auto', marginLeft: 'auto' }}>
            <h2 className='text-center'>Könyvek</h2>
            {
                konyvek.map((item) => {
                    return (
                        <div className="card m-3 text-center" style={{ width: '21rem' }}>
                            <Link onClick={async () => {
                                await setKonyv(item);
                            }} to={`/konyv/${item.id}`} className="text-decoration-none text-dark">{item.nev}
                                <div className="card-body">
                                    <p>A könyv neve: {item.nev}</p>
                                    <h5>Kiadás éve: {item.kiadasEve}</h5>
                                    <p>Könyv értékelése: {item.ertekeles}</p>
                                    <img src={item.kepneve} className="img-thumbnail" style={{ width: '50%' }} />

                                </div>
                            </Link>

                            <div>
                                <Link to={`/konyv-szerkesztese/${item.id}`} className="btn-primary"><i className="bi bi-pencil"></i></Link>
                                <Link to={`/konyv-torles/${item.id}`} className="btn-primary"><i className="bi bi-trash3"></i></Link>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Konyvek