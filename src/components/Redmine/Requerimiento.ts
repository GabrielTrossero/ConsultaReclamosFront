//archivo donde defino la estructura del requerimiento
export interface Requerimiento {
    issue:{
        id: number,
        status:{
            name: string
        }
    }
}