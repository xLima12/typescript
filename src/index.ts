//objeto sem previsibilidade
let produto: object = {
    name: 'produto',
    preco: 20,
    desconto: 0.1
};

//objeto com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidade: number;
}

let loja: ProdutoLoja = {
    nome: 'loja',
    preco: 100,
    unidade: 1
}

//Arrays
 let dados: string[] = ['Felipe', 'Júlia', 'Leda'];
 let dados2: Array<string> = ['Felipe', 'Júlia', 'Leda'];

 let infos: (string | number)[] = ["Felipe", 27, "Júlia", 2, "Leda", 55];

 //Tuplas
 let boleto:[string, number, number] = ["Água", 199.9, 3234342];

 //Datas
 let aniversario:Date = new Date("2022-12-01 05:00");
 console.log(aniversario.toString());

 //Funções
 function addNumber(x: number, y: number): number {
    return x + y;
 }

 function addToHello(name: string): string {
    return `Hello ${name}`;
 }

 function CallToPhone(phone: number | string): number | string {
    return phone;
 }

 let soma: number = addNumber(4, 7);

 console.log()

 // Funções Async
 async function getDataBase(id: number): Promise<string> {
    return "Felipe"
 }