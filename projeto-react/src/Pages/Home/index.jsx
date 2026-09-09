import React from 'react'
import Box from "../../Components/Box"
import img1 from "../../assets/img/box-1.jpg"
import img2 from "../../assets/img/box-2.jpg"

export default function index() {
  return (
    <main className="container">
      <section className="d-flex">
        <Box
          title="Título do componente"
          description="Este é um parágrafo de exemplo para o componente."
          imagem={img1}
        />
        <Box
          title="Título do componente 2"
          description="Este é um parágrafo de exemplo."
          imagem={img2}
        />
      </section>
    </main>
  )
}
