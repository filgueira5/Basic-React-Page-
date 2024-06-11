import ReactImage from "/react.png"

const FirstComponent = () => {
    return (
        <>
            <img src={ReactImage} alt="" />
            <h1>React</h1>
            <p>A biblioteca para interface de usuário web e nativas.</p>
            <button>Aprenda React</button>
            <button>Referência da API</button>
            <hr></hr>
            <h1>Crie interfaces de usuário de Componentes</h1>
            <p>React permite que você construa interfaces de usuário a partir de pedaços individuais chamados de componentes.</p>
            <hr/>
            <h1>Escreva componentes com código de marcação</h1>
            <p>Componentes React são funções JavaScrip. A sintaxe de marcação é chamada de JSX. É uma extensão da sintaxe JavaScript popularizada pelo React</p>
            <hr />
            <h1>Próximos Passos</h1>
            <ul>
                <li>Uso de dados dinâmicos no JSX </li>
                <li>Criação de novos Componentes</li>
                <li>Estilização de Componentes</li>
                <li>Reutilização de Componentes</li>
                <li>Uso de props e children</li>
                <li>Uso de eventos do JavaScript</li>
            </ul>
        </>
    )
}

export default FirstComponent;