import "./CampoTexto.css"
interface CampoTextoProps {
    aoAlterar: (valor: string) => void
    label: string
    descricao: string
    valor: string
    placeholder: string
    obrigatorio: boolean
}

const CampoTexto = ({ aoAlterar, label, obrigatorio, placeholder, valor, descricao } : CampoTextoProps) => {
    const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterar(evento.target.value);
    }
    return (
        <div className="campo-texto">
            <label>{label}</label>
            <h6>{descricao}</h6>
            <input 
             value={valor} 
             onChange={aoDigitar} 
             required={obrigatorio} 
             placeholder={placeholder} />
        </div>
    )
}

export default CampoTexto