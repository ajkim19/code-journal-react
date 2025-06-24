import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Entries } from './pages/Entries';
import { NewEntry } from './pages/NewEntry';
import { EditEntry } from './pages/EditEntry';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Entries />} />
        <Route path="/new-entry" element={<NewEntry />} />
        <Route path="/edit-entry" element={<EditEntry />} />
      </Route>
    </Routes>
  );
}
