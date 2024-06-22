import React from 'react';
import './ListaProdutos.css';

function ListaProdutos({ produtos, onMostraFormulario }) {
    let produtosElementosHtml = produtos.map((produto, indice) => {
        return (
            <div key={indice} className="produtoItem">
                <span className="produtoNome">
                    {produto.nome}
                </span>
                <span className="produtoValor">
                    R$ {produto.valor}
                </span>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="header">
                <strong>Produtos Cadastrados</strong>
                <button className="botao" onClick={() => onMostraFormulario()}>
                    +
                </button>
            </div>

            <div className="produtoItem">
                <span className="produtoHeader">
                    Nome:
                </span>
                <span className="produtoHeader">
                    Valor:
                </span>
            </div>

            {produtosElementosHtml}
        </div>
    );
}

export default ListaProdutos;
