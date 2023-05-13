import GlobalStyles from './components/styles/Global';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InnerPage from './pages/InnerPage';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inner" element={<InnerPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
