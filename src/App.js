import GlobalStyles from './components/styles/Global';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InnerPage from './pages/InnerPage';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inner" element={<InnerPage />} />
      </Routes>
    </>
  );
}

export default App;
