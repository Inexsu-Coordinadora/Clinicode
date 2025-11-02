import { IPaciente } from "../../dominio/entidades/pacientes/Ipaciente.js";
import { IPacienteRepositorio } from "../../dominio/repository/IPacienteRepositorio.js";

export class listarPacientes {
    constructor(private readonly repo: IPacienteRepositorio) {}

    async ejecutar(limite?:number): Promise<IPaciente[]>{
        const pacientesObtenidos = this.repo.listarPacientes(limite);
        return await pacientesObtenidos;
    }
};