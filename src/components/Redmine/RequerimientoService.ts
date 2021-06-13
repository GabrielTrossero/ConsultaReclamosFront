//archivo donde guardo todas las peticiones que se hacen al backend
import axios from 'axios';

export const getRequerimiento = async(id: string) => {
    const data =  await axios.get(
        `http://localhost:4000/redmine/${id}`,
        {timeout:5000}); //Luego configurar que el N° de req sea el que se solicita
        
    return data;
}
