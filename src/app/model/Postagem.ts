import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{
    public id:number
    public titulo: string
    public texto: string
    public data: Date
    public usuario: Usuario //Relacionar postagem com usuario
    public tema: Tema
}