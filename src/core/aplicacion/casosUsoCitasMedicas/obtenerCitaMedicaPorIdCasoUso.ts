import { ICitasMedicas } from "../../dominio/entidades/citasMedicas/ICitasMedicas.js";
import { ICitasMedicasRepositorio } from "../../dominio/repository/ICitasMedicasRepositorio.js";


export const obtenerCitaMedicaPorIdCasoUso = (repositorio: ICitasMedicasRepositorio) => {
    return async (idCita: string): Promise<ICitasMedicas | null> => {
        const cita = await repositorio.obtenerCitaMedicaPorID(idCita);
        return cita;
    };
};
