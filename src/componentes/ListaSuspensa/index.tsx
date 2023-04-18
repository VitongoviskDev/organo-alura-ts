import './ListaSuspensa.css'

interface ListaSuspensaProps{
    label: string,
    valor: string,
    obrigatorio: boolean,
    times: string[],
    aoAlterado: (valor : string) => void,

}
const ListaSuspensa = ({label, valor, obrigatorio, times, aoAlterado}: ListaSuspensaProps) => {
    console.log(times);
    
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} value={valor}>
                <option value=""></option>
                {times.map((time) => {
                    return <option key={time}>{time}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa