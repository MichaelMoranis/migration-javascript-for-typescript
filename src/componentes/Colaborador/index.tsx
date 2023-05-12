import {AiFillCloseCircle}  from "react-icons/ai"
import "./Colaborador.css"

interface ColaboradorProps {
    nome: string
    sobrenome: string
    cargo: string
    imagem: string
    corDeFundo: string
    aoDeletar: (nome: string) => void

}

const Colaborador = ({nome, sobrenome, cargo, imagem, corDeFundo, aoDeletar}: ColaboradorProps) => {
    return (
        <div className="colaborador">
            <AiFillCloseCircle 
              size={35} 
              className="deletar" 
              onClick={() => aoDeletar(nome)} 
            />
            <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h4>{sobrenome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador