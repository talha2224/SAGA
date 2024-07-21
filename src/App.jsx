import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import EntryPage from './pages/EntryPage'
import PlayPage from './pages/PlayPage'
import FuelPage from './pages/FuelPage'
import SagaPage from './pages/SagaPage'
import RankPage from './pages/RankPage'
import TeamPage from './pages/TeamPage'
import ForceTeamPage from './pages/ForceTeamPage'
import SocialPage from './pages/SocialPage'
import TaskPage from './pages/TaskPage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<EntryPage/>}/>
      <Route path='/play' element={<PlayPage/>}/>
      <Route path='/fuel' element={<FuelPage/>}/>
      <Route path='/saga' element={<SagaPage/>}/>
      <Route path='/rank' element={<RankPage/>}/>
      <Route path='/force' element={<TeamPage/>}/>
      <Route path='/force/team' element={<ForceTeamPage/>}/>
      <Route path='/social' element={<SocialPage/>}/>
      <Route path='/task' element={<TaskPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
