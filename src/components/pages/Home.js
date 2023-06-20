import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'



function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        <span>Cadastro de Professor</span>
      </h1>
      <p>Não é cadastrado ainda?! Então faça seu cadastro agora!</p>
      <LinkButton to="/Cadastro" text="Cadastre-se aqui!" />
    </section>
  )
}

export default Home