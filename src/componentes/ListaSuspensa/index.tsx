import "./ListaSuspensa.css"

interface ListaSuspensaProps {
    aoAlterar: (valor: string) => void
    label: string
    itens: string[]
    required: boolean
    valor: string
    
}

const ListaSuspensa = (props: ListaSuspensaProps) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select 
               onChange={ evento => props.aoAlterar(evento.target.value)} 
               required={props.required} 
               value={props.valor}
               >
                <option value="" className="options-list"></option>
               {props.itens.map(item => {
                return <option key={item}>{item}</option>
               })}
            </select>
        </div>
    )
}

export default ListaSuspensa