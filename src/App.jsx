
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './page/home'
import FeedbackForm from './page/FeedbackForm'
import StudentsList from './page/studentList'
import FeedbackDetail from './page/FeedbackDetails'
import EditFeedback from './page/editFeadback'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/students" element={<StudentsList />} />
        <Route path="/feedback/:id" element={<FeedbackDetail />} />
        <Route path="/feedback/:id/edit" element={<EditFeedback />} />
      </Routes>
    </Router>
  )
}

export default App


