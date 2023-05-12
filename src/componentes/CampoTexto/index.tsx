import "./CampoTexto.css"

interface CampoTextoProps {
    aoAlterar: (valor: string) => void
    label: string
    descricao: string
    valor: string
    placeholder: string
    obrigatorio: boolean
}

const CampoTexto = (props: CampoTextoProps) => {
    const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
        props.aoAlterar(evento.target.value);
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <h6>{props.descricao}</h6>
            <input 
             value={props.valor} 
             onChange={ evento => aoDigitar} 
             required={props.obrigatorio} 
             placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto