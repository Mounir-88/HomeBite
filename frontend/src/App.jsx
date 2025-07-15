import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter basename="/CI-Pipeline">
      <Routes>
        {/* Your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* Other routes */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
