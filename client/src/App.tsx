// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import './App.css'
// import Home from './pages/Home'
// function App() {
//   return (
//     <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//     </Router>
//   )
// }

// export default App

import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
  )
}

export default App