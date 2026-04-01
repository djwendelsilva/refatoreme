import Header from './components/Header'
import Card from './components/card'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div>
      <Header /> {/* Isso faz o Header aparecer */}
      
      <main>
        <Card titulo="Meu Primeiro Projeto" descricao="Refatoração concluída!" />
        <Card titulo="Docker" descricao="Configurado com sucesso." />
      </main>

      <Footer /> {/* Isso faz o Footer aparecer */}
    </div>
  )
}

export default App