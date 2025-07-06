import { Suspense } from 'react';
import AppRouter from './routes/AppRouter';
import { SpinnerLoader } from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "react-toastify/dist/ReactToastify.css";
import './App.css'

function App() {

  return (
    <Suspense fallback={<SpinnerLoader />}>
      <AppRouter />
    </Suspense>
  )
}

export default App;
