export interface ICitasMedicas {
    idCita?: string;
    idPaciente: string;
    idMedico: string;
    idConsultorio: string;
    fechaCita: string;
    motivoCita: string;
    estadoCita: 'pendiente' | 'confirmada' | 'cancelada';

    // Nuevos datos para tener el control sobre la cita. 
    creadaEn: string;
    actualizadaEn: string | null;
}