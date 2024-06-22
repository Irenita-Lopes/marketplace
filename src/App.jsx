import { useState, useEffect } from 'react';
import './App.css';
import ListaProdutos from './ListaProdutos';
import FormularioProduto from './FormularioProduto';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  const [produtosOrdenados, setProdutosOrdenados] = useState([]);

  useEffect(() => {
    const ordenados = [...produtos].sort((a, b) => a.valor - b.valor);
    setProdutosOrdenados(ordenados);
  }, [produtos]);

  function handleAdicionarProduto(novoProduto) {
    setProdutos(prevProdutos => [
      ...prevProdutos,
      novoProduto
    ]);
    setMostrarFormulario(false);
  }

  return (
    <>
      {!mostrarFormulario &&
        <ListaProdutos
          produtos={produtosOrdenados}
          onMostraFormulario={() => setMostrarFormulario(true)} />}

      {mostrarFormulario &&
        <FormularioProduto
          onEscondeFormulario={() => setMostrarFormulario(false)}
          onAdicionarProduto={handleAdicionarProduto}
        />}
    </>
  );
}

export default App;
