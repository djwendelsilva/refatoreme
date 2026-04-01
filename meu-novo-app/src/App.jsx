import Header from './components/Header'
import Card from './components/card'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div>
      <Header /> 
      
      <main>
        <Card titulo="Meu Primeiro Projeto" descricao="Refatoração concluída!" />
        <Card titulo="Docker" descricao="Configurado com sucesso." />
      </main>

      <Footer /> 
    </div>
  )
}

export default App