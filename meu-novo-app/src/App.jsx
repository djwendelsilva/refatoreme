import Header from './components/Header'
import Card from './components/card'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Card titulo="Projeto 1" descricao="Minha primeira refatoração" />
      <Card titulo="Projeto 2" descricao="Usando Docker com React" />
      <Footer />
    </div>
  )
}
export default App