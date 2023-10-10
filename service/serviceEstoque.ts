import { Data } from '../model/data.interface'
import readCSV from '../model/readCSV'
import writeCSV from '../model/writeCSV'
import fs from 'fs'

class estoqueService {

    async criar (data: Data) {
        const produtos = await readCSV('./model/estoque.csv');
        for (const item of produtos) {
            if (item.nome === data.nome) {
                throw new Error ("Já existe produto com esse nome.");
            }
        }
        await writeCSV('./model/estoque.csv', [data])
    }

    async deletar (nome: string){
        const produtos = await readCSV('./model/estoque.csv');
        const produtoIndex = produtos.findIndex((produto) => produto.nome == nome);

        if (produtoIndex === -1) {
            throw new Error(`Não foi encontrado um produto com o nome ${nome}.`);
        }

        produtos.splice(produtoIndex, 1); // não entendi oq faz

        fs.writeFileSync('./model/estoque.csv', '');
        fs.appendFileSync('./model/estoque.csv', 'id,title,value\n');

        await writeCSV('./model/estoque.csv', produtos);
    }

    async listar () {
        const produtos = await readCSV('./model/estoque.csv');
        return produtos;
    }

    async calcularValor () {
        var soma = 0;
        const produtos = await readCSV('./model/estoque.csv');
        for (const item of produtos) {
            soma += +item.valor * +item.quantidade;
        }
        return soma;
    }

    async calcularPeso() {
        var soma = 0;
        const produtos = await readCSV('./model/estoque.csv');
        for (const item of produtos) {
            soma += +item.peso * +item.quantidade;
        }
        return soma;
    }

    async calcularMediaValor() {
        var soma = 0;
        var n = 0;
        const produtos = await readCSV('./model/estoque.csv');
        for (const item of produtos) {
            soma += +item.valor * +item.quantidade;
            n += +item.quantidade;
        }
        return soma/n;
    }

    async calcularMediaPeso() {
        var soma = 0;
        var n = 0;
        const produtos = await readCSV('./model/estoque.csv');
        for (const item of produtos) {
            soma += item.peso * item.quantidade;
            n += item.quantidade;
        }
        return soma/n;
    }

    async calcularQuantidadeItens() {
        var n = 0;
        const produtos = await readCSV('./model/estoque.csv');
        for (const item of produtos) {
            n += item.quantidade;
        }
        return n;
    }

    async calcularQuantidadeProdutos() {
        var n = 0;
        const produtos = await readCSV('./model/estoque.csv');
        for (const item of produtos) {
            n += 1;
        }
        return n;
    }

}

export default new estoqueService();