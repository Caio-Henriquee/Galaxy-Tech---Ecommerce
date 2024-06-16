import { produtos } from "./produtos.interface";


export type ProdutosPayload = Omit<produtos, 'id'>