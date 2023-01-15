import {BrowserRouter, Route, Routes}  from 'react-router-dom'
import { Box } from "@mui/material";
import {ChannelDetail, Feed, VideoDetail, SearchDetail, NavBar } from './components'
function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#000'}}>
        <NavBar/>
        <Routes>
          <Route path='/' exact element={<Feed/>}/>
          <Route path='/video/:id' element={<VideoDetail/>}/>
          <Route path='/channel/:id' element={<ChannelDetail/>}/>
          <Route path='/search/:id' element={<SearchDetail/>}/>
        </Routes>
      </Box>

    </BrowserRouter>
  );
}

export default App;
