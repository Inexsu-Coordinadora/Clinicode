import { IPaciente } from "../../dominio/entidades/pacientes/Ipaciente.js";
import { Paciente } from "../../dominio/entidades/pacientes/Paciente.js";
import { IPacienteRepositorio } from "../../dominio/repository/IPacienteRepositorio.js";


export class CrearPaciente {
    constructor(private readonly repo: IPacienteRepositorio) {}

    async ejecutar(datosPaciente:Paciente): Promise<string> {
        const idPaciente = await this.repo.crearPaciente(datosPaciente);
        return idPaciente; 
    }
};