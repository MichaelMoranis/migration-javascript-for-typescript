import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { IColaborador } from "../../shared/interfaces/IColaborador";
// import { INovoTime } from "../../shared/INovoTime";

interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void;
  // cadastrarTime: (dados: INovoTime) => void
  nomesDosTimes: string[];
  times: [];
}

const Formulario = (props: FormularioProps) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobreNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useState("");
  // const [nomeTime, setNomeTime] = useState("");
  // const [CorTime, setCorTime] = useState("");

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      sobrenome,
      cargo,
      imagem,
      time,
      data
    });
    setNome("");
    setCargo("");
    setSobreNome("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador !</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="digite seu nome"
          valor={nome}
          aoAlterar={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Sobrenome"
          placeholder="digite seu sobrenome"
          valor={sobrenome}
          aoAlterar={(valor) => setSobreNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="digite o seu cargo"
          valor={cargo}
          aoAlterar={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          descricao=" exemplo: --> https://github.com/devsoftware.png"
          placeholder="digite o endereco da sua imagem"
          valor={imagem}
          aoAlterar={(valor) => setImagem(valor)}
        />
        <CampoTexto
          label="data de entrada no time"
          descricao=""
          placeholder=""
          valor={data}
          aoAlterar={(valor) => setData(valor)}
          tipo="date"
        />
        <ListaSuspensa
          label="Time"
          required={true}
          itens={props.nomesDosTimes}
          valor={time}
          aoAlterar={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
      {/* <form onSubmit={(evento) => {
        evento.preventDefault()
        // props.cadastrarTime({nome: nomeTime, cor: CorTime});
      }}>
        <h2>Preencha os dados para criar um novo time !</h2>
        <CampoTexto 
           obrigatorio 
           label="Nome" 
           placeholder="digite o nome do time"
           valor={nomeTime}
           aoAlterar={valor => setNomeTime(valor)}
        />
        <CampoTexto 
           obrigatorio
           label="Cor" 
           placeholder="digite a cor do time" 
           valor={CorTime}
           aoAlterar={valor => setCorTime(valor)}
        />
        <Botao>
          Criar um novo time
        </Botao>
      </form> */}
    </section>
  );
};

export default Formulario;
