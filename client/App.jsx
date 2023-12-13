import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppProvider from './utils/AppProvider';
import { Header, ProtectedRoute } from './components';
import { HomePage, AuthPage, Logout, PrivatePage, ViewPage } from './pages/'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserPage from './pages/UserPage';

export default function App(){

  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <div className="container pt-5">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/viewstory" element={<ViewPage />} />
            
            <Route path="/user" element={
              <ProtectedRoute>
                <UserPage />
              </ProtectedRoute>
            }/>
            
            <Route path="/private" element={
              <ProtectedRoute>
                <PrivatePage />
              </ProtectedRoute>
            }/>

            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppProvider>
  )
}
