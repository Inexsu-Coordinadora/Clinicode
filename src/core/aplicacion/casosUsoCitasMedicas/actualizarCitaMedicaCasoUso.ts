import { ICitasMedicasRepositorio } from "../../dominio/repository/ICitasMedicasRepositorio";
import { ICitasMedicas } from "../../dominio/entidades/citasMedicas/ICitasMedicas";

export const actualizarCitaMedicaCasoUso = (repositorio: ICitasMedicasRepositorio) => {
    return async (idCita: string, datos: ICitasMedicas): Promise<ICitasMedicas | null> => {
        datos.actualizadaEn = new Date().toISOString();
        const citaActualizada = await repositorio.actualizarCitaMedica(idCita, datos);
        return citaActualizada;
    };
};
