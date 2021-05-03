import { Postagem } from "./Postagem"

export class Usuario{
    public id:number
    public nome: string
    public usuario: string
    public senha: string
    public foto: String
    public tipo: string
    public postagem: Postagem[] //Relacionar usuário com (um array de) postagem
}