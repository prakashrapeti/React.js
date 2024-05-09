import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
// import NotFound from './NotFound';
import NotFoundError from './NotFoundError';

function App() {
  // const title = "welcome to the new blog";
  // const likes = 50;
  // const link =  "http://www.google.com";
  return (
    <Router>
      <div className="App">
        <Navbar />
      
       <div className="content"> 
          <Switch>
            <Route exact path = '/'>
              <Home />
            </Route>
            <Route path = "/create">
              <Create/>
            </Route>
            <Route path = "/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
             <NotFoundError/>
            </Route>
          </Switch>
       </div>
       
      
      </div>
    </Router>
  );
}

export default App;
