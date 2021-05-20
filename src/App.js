import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import SingleProject from './pages/SingleProject'
import Experience from './pages/Experience'
import NavBar from './pages/NavBar'
import ContactMe from './pages/ContactMe'

function App() {
  return (
   <BrowserRouter>
    <NavBar />
     <Switch>
      <Route component={Home} path="/" exact/>
      <Route component={ContactMe} path="/contact" />
      <Route component={SingleProject} path="/project/:slug" />
      <Route component={Projects} path="/projects" />
      <Route component={Experience} path="/experience" />
     </Switch>
   </BrowserRouter>
  );
}

export default App;
