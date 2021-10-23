import { useState, useEffect } from "react";

import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss';

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

// useEffect recebe 2 parametros: 
// 1. {} qual função quero executar 
// 2. [] quando quero executar a função

// obs: pode executar uma função quando a varivel mudar

    useEffect(() => {
        // Quando o componente RepositoryList for renderizado em tela, acesse a api do github
        // para buscar os dados do repositorio.

        // buscar o repositorio, quando o fetch devolver uma resposta
        // converte a resposta para json e quando a resposta para json terminar
        // de ser convertida terá os dados do repositório.

        fetch('https://api.github.com/users/alicecomoura/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []) 

    // Ao passar um array vazio no useEffect a função executa somente uma vez.
    // Por que? >> como o array de dependencia está vazio não existe nada 
    // que quando alterar vai executar a função novamente

    // ** Ao deixar o useEffect somente com 1 parametro ocorre um loop

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem 
                                key={repository.name} 
                                repository={repository} 
                            />
                })}
            </ul>
        </section>
    )
}