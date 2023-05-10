import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import Main from './main'

export default function App() {
    return (
      <Router>
{/*         
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movie/:id">
            <MovieDetails />
          </Route> */}
         <Route exact path="/" element={< Main />} />
         <Route exact path="/films/:id" element={< MovieDetails />} />
      </Router>
    );
  }









// import React from "react";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Details from "./pages/Details";
// import Homepage from "./pages/Homepage";


// function App() {
//   return (
    
//     <Router>
//       {/* <Switch> */}
//         {/* <Route exact path="/"> */}
//           {/* <Homepage /> */}
//         {/* </Route> */}
//         {/* <Route path="/movie/:id"> */}
//         <Route exact path="/" element={< Homepage />} />
//         <Route exact path="/films/:id" element={< Details />} />
 
//           {/* <Details /> */}
//         {/* </Route> */}
//       {/* </Switch> */}
//     </Router>
//   );
// }

// export default App;