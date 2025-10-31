import { CitasMedicas } from "../../dominio/entidades/citasMedicas/CitasMedicas";
import { ICitasMedicas } from "../../dominio/entidades/citasMedicas/ICitasMedicas";
import { ICitasMedicasRepositorio } from "../../dominio/repository/ICitasMedicasRepositorio";

export const crearCitaMedicaCasoUso = (repositorio: ICitasMedicasRepositorio) => {
    return async (datos: ICitasMedicas) => {
        const nuevaCita = new CitasMedicas({
            ...datos,
            estadoCita: 'pendiente',
            creadaEn: new Date().toISOString(),
            actualizadaEn: null,
        });
        const citaCreada = await repositorio.crearCitaMedica(nuevaCita);
        return citaCreada;
    }
} 