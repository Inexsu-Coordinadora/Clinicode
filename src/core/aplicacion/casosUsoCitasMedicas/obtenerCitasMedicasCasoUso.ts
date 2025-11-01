import { ICitasMedicas } from "../../dominio/entidades/citasMedicas/ICitasMedicas.js";
import { ICitasMedicasRepositorio } from "../../dominio/repository/ICitasMedicasRepositorio.js";


export const obtenerCitasMedicasCasoUso = (repositorio: ICitasMedicasRepositorio) => {
    return async (): Promise<ICitasMedicas[]> => {
        return await repositorio.obtenerCitasMedicas();
    }
}