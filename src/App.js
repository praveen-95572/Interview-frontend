import React from "react";
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import PostDetail from "./components/PostDetail";
import PostD from "./components/PostD";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/post/:postId" render={(props) => <PostDetail {...props} />} />
   </Switch>
   </BrowserRouter>
  );
}

export default App;
