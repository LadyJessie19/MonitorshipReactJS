import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Questions from '../Questions'
import Quiz from '../Quiz'
import Form from '../Form'

const Main = () => {
  return (
    <>
        <Routes>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/form" element={<Form />} />
          <Route path="/questions" element={<Questions />} />
        </Routes>
    </>
  )
}

export default Main