import { Data } from './model/data.interface'
import readline from 'readline';
import { adicionarProduto, removerProduto, listarItens, verValorTotal, verPesoTotal, verMediaValor, verMediaPeso, verQuantidadeItens, verQuantidadeProdutos } from './controller/controleEstoque';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("Escolha uma opção:");
    console.log("1. Adicionar produto");
    console.log("2. Remover produto");
    console.log("3. Listar itens");
    console.log("4. Ver valor total do Inventário:");
    console.log("5. Ver peso total do Inventário:");
    console.log("6. Ver média de valor dos itens: ");
    console.log("7. Ver média de peso dos itens: ");
    console.log("8. Ver quantidade de itens no Inventário: ");
    console.log("9. Ver quantidade de produtos no Inventário: ");
    console.log("0. Sair");
}

async function main() {
    while (true) {
        menu();

        const option = await askQuestion("Opção: ");

        switch (option) {

            case '1': // adicionar
                const data: Data = {
                    nome: '',
                    peso: 0,
                    valor: 0,
                    quantidade: 0
                };

                data.nome = await askQuestion("Nome do produto: ");
                data.peso = parseInt(await askQuestion("Peso do produto: "));
                data.valor = parseInt(await askQuestion("Valor do produto: "));
                data.quantidade = parseInt(await askQuestion("Quantidade do produto: "));

                await adicionarProduto(data);                
                break;

            case '2': // remover
                const nome = await askQuestion("Nome do produto: ");
                await removerProduto(nome);
                break;

            case '3': // listar
                await listarItens();
                break;

            case '4': // valor total
                await verValorTotal();
                break;

            case '5': // peso total
                await verPesoTotal(); 
                break;

            case '6': // media valor
                await verMediaValor();
                break;

            case '7': // media peso
                await verMediaPeso();
                break;

            case '8': // qtd itens
                await verQuantidadeItens();
                break;

            case '9': // qtd prod
                await verQuantidadeProdutos();
                break;

            case '0': // sair
                rl.close();    
                return;

            default:
                console.log("Opção inválida!");
        }
    }
}

function askQuestion(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

main();