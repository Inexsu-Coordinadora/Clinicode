import { ICitasMedicas } from "../../dominio/entidades/citasMedicas/ICitasMedicas"
import { ICitasMedicasRepositorio } from "../../dominio/repository/ICitasMedicasRepositorio"

export const obtenerCitasMedicasCasoUso = (repositorio: ICitasMedicasRepositorio) => {
    return async (): Promise<ICitasMedicas[]> => {
        return await repositorio.obtenerCitasMedicas();
    }
}