import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Professores from './components/pages/Professores'
import Cadastro from './components/pages/Cadastro'

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';



function App() {

  return (
    //aqui é o JSX, dentro dele eu faço as alterações para aparecer na parte de front-end/visual do usuário
    <Router>
      {/**parte fisica do jsx */}
      <Navbar />

      {/**alterar as paginas do projeto */}
      <Switch>
        <Container customClass="min-height">

          {/**home do projeto */}
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/cadastro'>
            <Cadastro />
          </Route>

          <Route  path='/professores'>
            <Professores />
          </Route>

        </Container>
      </Switch>

      <Footer />

    </Router>
  );
}

export default App;
