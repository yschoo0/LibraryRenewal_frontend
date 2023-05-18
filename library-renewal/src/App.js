import { Routes, Route } from 'react-router-dom';
import MyLoanPage from './pages/MyLoanPage';
import StudyRoomReservePage from './pages/StudyRoomReservePage';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/myloan/*" element={<MyLoanPage />}></Route>
        <Route
          path="/studyroom/reserve/*"
          element={<StudyRoomReservePage />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
