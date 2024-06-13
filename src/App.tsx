
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { RoutesObject } from './lib/routes'
import MainPage from './pages/main'
import CoursePage from './pages/course'
import NotFoundPage from './pages/notfound'
import ProfilePage from './pages/profile'
import ResetPasswordPage from './pages/reset-password'
import SignInPage from './pages/signin'
import SignUpPage from './pages/signup'
import WorkoutsPage from './pages/workouts'
import WorkoutPage from './pages/workout-page'
import Layout from './components/shared/layout'

function App() {
  

  return (
    <>
     <Routes>
      <Route element={<Layout/>}>
      <Route path={RoutesObject.MAIN} element={<MainPage/>}/>
      <Route path={RoutesObject.COURSE} element={<CoursePage/>}/>
      <Route path={RoutesObject.NOTFOUND} element={<NotFoundPage/>}/>
      <Route path={RoutesObject.PROFILE} element={<ProfilePage/>}/>
      <Route path={RoutesObject.RESETPASSWORD} element={<ResetPasswordPage/>}/>
      <Route path={RoutesObject.SIGNIN} element={<SignInPage/>}/>
      <Route path={RoutesObject.SIGNUP} element={<SignUpPage/>}/>
      <Route path={RoutesObject.WORKOUTS} element={<WorkoutsPage/>}/>
      <Route path={RoutesObject.WORKOUT_PAGE} element={<WorkoutPage/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App
