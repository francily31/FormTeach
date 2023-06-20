import { useState } from 'react';

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton';
import styles from './CadastroForm.module.css'
import mdados from '../../data/dados';

function CadastroForm({ btnText }) {

    /*const [nomeP, setNomeP] = useState('');

    const handleChange = event => {
        setNomeP(event.target.value);
    
        console.log('value is:', event.target.value);
      };*/


    //const [cadastros, setCadastros] = useState([])

    /*fetch("http://localhost:5000/cadastros", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then().catch((err) => console.log(err))*/

    //console.log(mdados.lista);


    function salvar(e) {
        e.preventDefault();
        let prof = {
            nome: e.target.nomeP.value,
            curso: e.target.curso_id.value,
            periodo: e.target.periodo_id.value,
            turno: e.target.turno_id.value
        }

        mdados.salva(prof);
        alert('Salvo com Sucesso!');
        window.location = 'professores';
    }

    

    return (
        <form className={styles.form} onSubmit={salvar}>
            <Input
                type="text"
                text="Nome do Professor"
                id="nomeP"
                name="nomeP"

                placeholder="Insira o nome do Professor"
            />

            <Select name="curso_id" text="Selecione o Curso" options={
                [
                    { id: 'SI', nome: 'SI' },
                    { id: 'TADS', nome: 'TADS' },
                    { id: 'ENG', nome: 'ENG' }
                ]
            }></Select>

            <Select name="periodo_id" text="Selecione o Periodo" options={
                [
                    { id: '1', nome: 'Primeiro' },
                    { id: '2', nome: 'Segundo' },
                    { id: '3', nome: 'Terceiro' },
                    { id: '4', nome: 'Quarto' },
                    { id: '5', nome: 'Quinto' },
                    { id: '6', nome: 'Sexto' },
                    { id: '7', nome: 'Setimo' },
                    { id: '8', nome: 'Oitavo' },
                    { id: '9', nome: 'Nono' },
                    { id: '10', nome: 'Decimo'}
                ]
            }></Select>

<Select name="turno_id" text="Selecione o Turno" options={
                [
                    { id: '1', nome: 'Matutino' },
                    { id: '2', nome: 'Vespertino' },
                    { id: '3', nome: 'Noturno' },
                ]
            }></Select>
            


            <SubmitButton text={btnText} />
        </form>
    )
}

export default CadastroForm;