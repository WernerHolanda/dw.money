import axios from 'axios'; /* a ideia aqui é buscar dados - ou enviar dados - é pra isso que usamos a pasta services e nomeamos api*/

export const api = axios.create({
    baseURL: 'http://localhost:3000/api', /* aqui é pra colocar o endereço que se repete em todas as requisições */
    
})