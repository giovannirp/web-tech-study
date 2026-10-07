import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

export default function index() {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: ""
  });

  // Função para atualizar o estado ao digitar no formulário
  const handleChange = (e) => {
    // Obter o elemento de entrada atual
    const { name, value } = e.target;
    // Extrair o valor e o nome do campo de entrada
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  }

  // Função para enviar o formulário
  const haldleSubmit = (e) => {
    e.preventDefault();

    // Validação dos campos
    if (formData.nome == "" || formData.email == "" || formData.telefone == "") {
      // alert("Todos os campos são obrigatórios!")
      toast.error("Todos os campos são obrigatórios!")
      return false;
    }

    // Enviando os dados para o backend como JSON
    fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Usuários cadastrado com sucesso:", data)
        // Limpa o formulário após o envio
        toast.success("Usuários cadastrado com sucesso!")
        setFormData({
          nome: "",
          telefone: "",
          email: ""
        })
      })

  }

  return (
    <main className="container">
      <h1>Cadastro de usuários</h1>
      <form onSubmit={haldleSubmit}>
        <article className="form-control">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </article>

        <article className="form-control">
          <label htmlFor="telefone">Telefone</label>
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
        </article>

        <article className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </article>

        <button type="submit">Cadastrar</button>

        <ToastContainer />

      </form>
    </main>
  )
}
