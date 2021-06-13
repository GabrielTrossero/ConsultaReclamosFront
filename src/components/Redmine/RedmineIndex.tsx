import React, { FormEvent, ChangeEvent, useState } from 'react';

import {Requerimiento} from './Requerimiento'; //me traigo el objeto video
import * as requerimientoService from './RequerimientoService'; //me traigo las peticiones
import {toast} from 'react-toastify';



const RedmineIndex = () => {

    const [requerimiento, setRequerimiento] = useState<Requerimiento>(); //en "requerimiento" seteo el json del req. que me devuelve la API

    const [id, setID] = useState({ //en "id" seteo el num de req. que ingresan
        value: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setID({value: e.target.value}); //seteo los tipeos en el input
        console.log(id)
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(id); //en "id" tengo el valor del input cuando envía el form
        const res = await requerimientoService.getRequerimiento(id.value); //busco dicho req. 
        console.log(res);
        setRequerimiento(res.data); //guardo los datos en "requerimiento" para usarlo en la vista
        if (res) {
            toast.success('Requerimiento encontrado')
        }
        else { //no anda, hay que diseñarlo
            toast.error('Requerimiento no encontrado');
        }
    }

    return(
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col s5">
                        <div className="card">
                            <div className="card-content">
                                <form onSubmit={handleSubmit}> {/*Evento creado por nosotros para el envío del form*/}
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input name="codigo" type="text" placeholder="Ingresar código" onChange={handleChange}></input>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn light-green darken-4">
                                        Consultar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h5>Requerimiento N°: {requerimiento?.issue.id}</h5>
                    <h5>Estado: {requerimiento?.issue.status.name}</h5>
                </div>
            </div>
        </div>
    )
}

export default RedmineIndex