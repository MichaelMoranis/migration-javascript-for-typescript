import "./CampoTexto.css"
interface CampoTextoProps {
    aoAlterar: (valor: string) => void
    label: string
    descricao?: string
    valor: string
    placeholder: string
    obrigatorio?: boolean
    tipo?: "text" | "password" | "date" | "email" | "number"
}

const CampoTexto = ({ aoAlterar, label, placeholder, valor, descricao, obrigatorio = false, tipo = "text" } : CampoTextoProps) => {
    const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterar(evento.target.value);
    }
    return (
        <div className="campo-texto">
            <label>{label}</label>
            <h6>{descricao}</h6>
            <input 
            type={tipo}
             value={valor} 
             onChange={aoDigitar} 
             required={obrigatorio} 
             placeholder={placeholder} />
        </div>
    )
}

export default CampoTexto