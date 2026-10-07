import { useEffect, useState } from "react"
import "./Usuarios.css"

export default function index() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/usuarios")
            .then((response) => response.json())
            .then((data) => setUsuarios(data))
            .catch((error) => console.log(error))
    }, [])

    const deleteUsuarios = (id) => {
        fetch(`http://localhost:3000/usuarios/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
        })
        .catch((error) => console.error(error))
    }

    return (
        <section className="container usuarios">
            <h1>Lista de Usuários</h1>

            {usuarios.map((user) => (
                <article className="content-usuarios" key={user.id}>
                    <strong>Nome: {user.nome}</strong>
                    <br />
                    <strong>Telefone: 11 {user.telefone}</strong>
                    <br />
                    <strong>Email: {user.email}</strong>
                    <br />
                    <button
                        onClick={() => deleteUsuarios(user.id)}
                        className="delete">
                        Deletar
                    </button>
                    <hr />
                </article>
            ))}


        </section>
    )
}
