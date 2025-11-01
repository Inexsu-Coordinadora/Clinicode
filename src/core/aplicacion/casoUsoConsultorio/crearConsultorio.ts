import { IConsultorioRepositorio } from "../../dominio/repository/IConsultorioRepositorio.js";
import { Consultorio } from "../../dominio/entidades/consultorios/IConsultorio.js";


export class CrearConsultorio {
    constructor(private repo: IConsultorioRepositorio) { }

    async ejecutar(consultorio: Consultorio) {
        await this.repo.crear(consultorio);
    }
}