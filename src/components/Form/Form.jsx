import {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

export function Form(){

    const [nome , setNome] = useState('')
    const [email , setEmail] = useState('')
    const [senha , setSenha] = useState('')
    const [confsenha , setConfSenha] = useState('')

    const NomeChange =(e)=>{
        setNome(e.target.value)
    }
    const EmailChange =(e)=>{
        setEmail(e.target.value)
    }
    const SenhaChange =(e)=>{
        setSenha(e.target.value)
    }
    const ConfSenhaChange =(e)=>{
        setConfSenha(e.target.value)
    }
    
    const Submit=(e)=>{
        if(senha!==confsenha){
            alert("A Senha não Confere")
        }
        else{
            alert("Sr(a) " + nome + ", seus dados foram enviados com sucesso")
        }
        e.preventDefault()
    }

    const Reset=(e) => {
        setNome(e.target.value="")
        setEmail(e.target.value="")
        setSenha(e.target.value="")
        setConfSenha(e.target.value="")
    }
        
return (
    <form onSubmit={(e) => {Submit(e)}}>
        <h2> Formulário de Cadastro </h2>
        
        <label>Informe o Nome:</label><br/>
        <input type="text" value={nome} required
    onChange={(e) => {NomeChange(e)}} /><br/>
        
        <label>Informe o E-mail:</label><br/>
        <input type="email" value={email} required
    onChange={(e) => {EmailChange(e)}}/><br/>

        <label>Informe a Senha:</label><br/>
        <input type="password" value={senha} required onChange={(e) => {SenhaChange(e)}}/><br/>
        
        <label>Confirme a Senha:</label><br/>
        <input type="password" value={confsenha} required onChange={(e) => {ConfSenhaChange(e)}}/><br/><br/>
        
        <button type="submit" class="btn btn-success">ENVIAR</button>
        <button type="button" class="btn btn-danger" onClick={(e) => Reset(e)}>LIMPAR</button>
    </form>
    )
}