import CadastroForm from '../cadastro/CadastroForm';
import styles from './Cadastro.module.css'


function Cadastro() {
    return ( 
        <div className={styles.cadastro_container}>
        
         <h1>Cadastro de Professor</h1>  
         <p>Faça seu cadastro aqui</p>
         
         <CadastroForm  btnText="Cadastrar"/>
         </div>
        
    ) 
}

export default Cadastro