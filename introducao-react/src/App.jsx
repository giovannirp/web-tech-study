import Header from "./Components/Header"
import Card from "./Components/Card"
import Footer from "./Components/Footer"
import Banner from "./Components/Banner"
import ImgCard from "./Components/ImgCard"
import Count from "./Components/Count"
import Box from "./Components/Box"

function App() {

  return (
    <>
      <Header title="Meu site" />

       <Count />

       <Box />

       <ImgCard caption="New Lorem Ipsum" />

       <Banner>
          <h1>Bem-vindo ao meu site</h1>
          <p>Aqui você econtra as melhores ofertas!</p>
       </Banner>

      <Card />

      <Footer title="New Lorem ipsum dolor sit amet con." />
    </>
  )
}

export default App
