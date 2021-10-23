import { useState } from "react";

import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss';

//https://api.github.com/users/alicecomoura/repos

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/alicecomoura'
}

export function RepositoryList() {
    const [] = useState()


    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}