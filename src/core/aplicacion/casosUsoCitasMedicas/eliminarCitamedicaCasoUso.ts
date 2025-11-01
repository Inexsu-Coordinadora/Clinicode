import { ICitasMedicasRepositorio } from "../../dominio/repository/ICitasMedicasRepositorio.js";

export const eliminarCitaMedicaCasoUso = (repositorio: ICitasMedicasRepositorio) => {
    return async (idCita: string): Promise<boolean> => {
        return await repositorio.eliminarCitaMedica(idCita);
    };
};
