import './FormularioProduto.css';

function FormularioProduto({ onEscondeFormulario, onAdicionarProduto }) {
    let nome = "";
    let descricao = "";
    let valor = 0;
    let disponibilidade = true;

    function handleSalvar() {
        let produtoCriado = {
            nome: nome,
            descricao: descricao,
            valor: valor,
            disponibilidade: disponibilidade
        }
        onAdicionarProduto(produtoCriado)

    }
    function handleChangeNome(evento) {
        console.log(evento.target.value);
        nome = evento.target.value;
    }

    function handleChangeDescricao(evento) {
        console.log(evento.target.value);
        descricao = evento.target.value;
    }

    function handleChangeValor(evento) {
        console.log(evento.target.value);
        valor = evento.target.value;
    }

    function handleChangeDisponiblidade(evento) {
        console.log(evento.target.value);
        disponibilidade = evento.target.value;
    }

    return (
        <div className='formulario'>
            <h2>Cadastro de Produtos</h2>

            <div className='linha-imput'>
                <label htmlFor="nome">Nome:</label>
                <input className='imput-padrao' type="text" name="nome" id="nome" onChange={handleChangeNome} />
            </div>

            <div className='linha-imput'>
                <label htmlFor="descricao">Descrição:</label>
                <input className='imput-padrao' type="text" name="descricao" id="nome" onChange={handleChangeDescricao} />
            </div>

            <div className='linha-imput'>
                <label htmlFor="valor">Valor:</label>
                <input className='imput-padrao' type="number" step="0.01" name="valor" id="nome" onChange={handleChangeValor} />
            </div>

            <div className='linha-imput'>
                <label htmlFor="disponibilidade">Disponibilidade:</label>
                <select className='imput-padrao' type="text" name="disponibilidade" id="nome" onChange={handleChangeDisponiblidade}>
                    <option value={null}>Selecione</option>
                    <option value={true}>Sim</option>
                    <option value={false}>Não</option>
                </select>
            </div>

            <nav className='nav-botao'>
                <button className='botao' onClick={() => onEscondeFormulario()}>
                    Ver lista
                </button>
                <button className='botao' onClick={handleSalvar}>
                    Cadastrar
                </button>
            </nav>

        </div>
    )
}

export default FormularioProduto;
