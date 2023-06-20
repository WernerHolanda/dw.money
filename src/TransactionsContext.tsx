import { createContext, useState, useEffect, ReactNode } from 'react';
import { api } from './services/api';


//a interface serve para resolver quando precisamos dizer qual o TYPE da informação.
interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string; 
    category: string;
    createdAt: string;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

// aqui eu vou passar qual o formato do meu contexto

interface TransactionsContextData {
    //aqui embaixo eu digo que o transaction vai ter um parâmetro di TransactionsContext, e [] significa
    //dizer q ele será um array
    transactions: Transaction[];

    //aqui embaixo eu tenho uma função chamda de createTransaction
    //que ela recebe '()' por parâmetro uma 'transaction' que é do tipo':' 'TransactionInput'. 
    // E ela vai devolver '=>' por padrão, 'void' q é vazio. 
    //Promise' irá permitir que  o 'await' do 'createTransaction' do 'index.tsx' do NewTransactionModal. funcione, de forma a 
    //-- a promise significa processos que já estão acontecendo, que podem ser encadeados com funções de retorno de chamada. 
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

// .'. serve para resolver o (transaction: TransactionInput)
// aqui é sintaxe do typescript
// significa que o transactionInput vai herdar todos os campos do Transaction, e vai apenas omitir 
//--o id e o createdAt
//type TransactionInput= Omit<Transaction, 'id' | 'createdAt'>

// Já o Pick é o contrario do Omit, .'. eu pego apenas o que eu quero do Transaction:
//tanto q se eu sobrepor o TransactionInput ele vai mostrar os dados que eu 'peguei' do Transaction.
type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;


export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
    /* aqui é uma forma de enganar o REACT, pois eu basicamente estou dizendo que 'tem sim o formato do
     TransactionContextData.*/
    
);

//como 'transactions' é um Estado, não se tem como alterar diretamente ele, logo eu não posso alterar diretamente a variavel.
//logo, eu tenho que usar justamente para alterar no REACT, como abaixo, o setTransactions:
//(isso tudo faz parte do conceito do REACT de imutabilidade) - 
export function TransactionsProvider({ children }: TransactionsProviderProps) { 
    const [transactions, setTransactions] = useState<Transaction[]>([]);
 /*const [transactions, setTransactions] = useState<Transaction[]>([]);
    // '<Transaction[]>' significa que eu puxo exatamente a interface, .'., o estado Transaction, que eu armazeno uma array '[]' e isso de colocar '[]' é para que eu não armazene apenas 1x transactions., mas sim várias transactions., 
    //aqui é um estado que eu criei. .'., listar na api, salvar um estado, e isso irá ficar se repetindo
    // como eu tenho um estado que será alterado, eu posso agora citar ele lá embaixo, por meio de 'transaction.map'
 */
    useEffect(() => {
      api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
    },  []);
//async significa transformar a função em assincrona .'. e toda funç assincrona retona uma promise. 
    async function createTransaction(transactionInput: TransactionInput) {
    // significa esperar que o api.post termine e esteja correta
    // response significa pegar a resposta que aparece no console do inspecionar no codigo 201. 
    const response = await api.post('/transactions', {
        //aqui embaixo o que tá rolando é que pra tudo dar certo ficou faltando o createdAt ser inserido, logo significa q eu to inserindo tanto a informação normal e adicionando o createdAt.
        ...transactionInput,
        createdAt: new Date(),
    })
    // quer dizer que eu coloquei na constante transaction a resposta data que foi gerada.
    const { transaction } = response.data;
    // quer dizer que eu irei setar uma nova informação por meio de '[]'.
    // logo eu copio todas as informações atuais e adiciono a nova informação const transaction,
    // isso é o conceito de imutabilidade;
    setTransactions([
        ...transactions,
        transaction,
    ]);
}
  
    return (
        <TransactionsContext.Provider value={{transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}