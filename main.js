 // importar as funçoes de outro arquivo como objeto
 import { gets, print } from './funcoes.js';

 const media = gets();

 if(media < 5){
    print("Reprovado");
 }

 else if(media < 7){
    print("recuperação");
 }
 else{
    print("Aprovado");
 }
 