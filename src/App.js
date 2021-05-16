import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/AboutMe'
import Posts from './pages/Posts'
import SinglePost from './pages/SinglePost'
import Projects from './pages/Projects'
import NavBar from './pages/NavBar'

function App() {
  return (
   <BrowserRouter>
    <NavBar />
     <Switch>
      <Route component={Home} path="/" exact/>
      <Route component={About} path="/about" />
      <Route component={SinglePost} path="/post/:slug" />
      <Route component={Posts} path="/posts" />
      <Route component={Projects} path="/projects" />
     </Switch>
   </BrowserRouter>
  );
}

export default App;
