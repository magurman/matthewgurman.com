import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Questions from "./components/Questions";
import Photography from "./components/Photography";
import Thoughts from './components/Thoughts';
import Cuisine from './components/Cuisine';
import Music from './components/Music';
import Podcasts from './components/Podcasts';
import Books from './components/Books';
import EnhancedPhotoView from './components/EnhancedPhotoView';


const Routing = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/questions" element={<Questions/>} />
          <Route path="/photography/:id" element={<EnhancedPhotoView/>}/>
          <Route path="/photography" element={<Photography/>}/>
          <Route path="/thoughts" element={<Thoughts/>}/>
          <Route path="/cuisine" element={<Cuisine/>}/>
          <Route path="/music" element={<Music/>}/>
          <Route path="/podcasts" element={<Podcasts/>}/>
          <Route path="/books" element={<Books/>}/>
          <Route path="/" element={<Landing />}/>
        </Routes>
    </BrowserRouter>
    )
  }

export default Routing;