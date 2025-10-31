import { ICitasMedicasRepositorio } from "../../dominio/repository/ICitasMedicasRepositorio";
import { ICitasMedicas } from "../../dominio/entidades/citasMedicas/ICitasMedicas";

export const obtenerCitaMedicaPorIdCasoUso = (repositorio: ICitasMedicasRepositorio) => {
    return async (idCita: string): Promise<ICitasMedicas | null> => {
        const cita = await repositorio.obtenerCitaMedicaPorID(idCita);
        return cita;
    };
};
