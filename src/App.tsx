import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Entries } from './pages/Entries';
import { NewEntry } from './pages/NewEntry';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Entries />} />
        <Route path="/new-entry" element={<NewEntry />} />
      </Route>
    </Routes>
  );
}
