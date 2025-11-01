import { IPaciente } from "../../dominio/entidades/pacientes/Ipaciente";
import { Paciente } from "../../dominio/entidades/pacientes/Paciente";
import { IPacienteRepositorio } from "../../dominio/repository/IPacienteRepositorio";


export class CrearPacienteUseCase {
    constructor(private readonly repo: IPacienteRepositorio) {}

    async ejecutar(datosPaciente:Paciente) {
        await this.repo.crearPaciente(datosPaciente)    
    }
};