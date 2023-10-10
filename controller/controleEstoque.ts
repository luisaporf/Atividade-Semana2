import { Data } from '../model/data.interface'
import serviceEstoque from "../service/serviceEstoque";

export async function adicionarProduto(data: Data) {
    try {
        await serviceEstoque.criar(data); 
        console.log("Produto adicionado.");
    } catch(error){
        console.log("Erro ao adicionar produto:", error);
    }
}

export async function removerProduto(nome: string) {
    try {
        await serviceEstoque.deletar(nome); 
        console.log("Produto removido.");
    } catch(error){
        console.log("Erro ao remover produto:", error);
    }
}

export async function listarItens() {
    const itens = await serviceEstoque.listar();
    console.log("Itens no estoque:", itens);
}

export async function verValorTotal() {
    const v = await serviceEstoque.calcularValor();
    console.log("Valor total do estoque:", v);
}

export async function verPesoTotal() {
    const v = await serviceEstoque.calcularPeso();
    console.log("Peso total do estoque:", v);
}

export async function verMediaValor() {
    const v = await serviceEstoque.calcularMediaValor();
    console.log("Média de valor no estoque:", v);
}

export async function verMediaPeso() {
    const v = await serviceEstoque.calcularMediaPeso();
    console.log("Média de peso no estoque:", v);
}

export async function verQuantidadeItens() {
    const v = await serviceEstoque.calcularQuantidadeItens();
    console.log("Quantidade de itens no estoque:", v);
}

export async function verQuantidadeProdutos() {
    const v = await serviceEstoque.calcularQuantidadeProdutos();
    console.log("Quantidade de produtos no estoque:", v);
}