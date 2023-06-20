import mdados from '../../data/dados';
import styles from './Table.module.css'


function Professores() {

    function handleEditar(prof) {
        //Logica para editar
        console.log('Editar:', prof)
    }

    function handleExcluir(prof) {
        // Lógica para a ação de excluir
        console.log('Excluir:', prof);

        const storedData = localStorage.getItem('mdados');

        const data = JSON.parse(storedData);
        delete data.itemKey;

        localStorage.setItem('mdados', JSON.stringify(data));

    }

    mdados.recupera();

    console.log(mdados.lista);

    const profs = mdados.lista;
    const profsT = [];

    if (profs != undefined) {

        profs.forEach((prof) => {
            profsT.push(
                <tr>
                    <td>{prof.nome}</td>
                    <td>{prof.curso}</td>
                    <td>{prof.periodo}</td>
                    <td>{prof.turno}</td>
                    <td>
                        <button  onClick={() => handleEditar(prof)}>Editar</button>
                        <button  onClick={() => handleExcluir(prof)}>Excluir</button>
                    </td>
                </tr>
            );
        });

    }

    return (
        <div>
            <h1 className=''>TABELA DE CADASTRO DE PROFESSORES</h1>

            <table className={styles.tabela}>
                <thead>
                    <tr>
                        <th className={styles.cabecalho}>Nome</th>
                        <th className={styles.cabecalho}>Curso</th>
                        <th className={styles.cabecalho}>Periodo</th>
                        <th className={styles.cabecalho}>Turno</th>
                        <th className={styles.cabecalho}>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {profsT}
                </tbody>

            </table>
        </div>
    );
}

export default Professores;