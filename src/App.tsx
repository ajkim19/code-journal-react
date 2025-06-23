import { Route, Routes } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Entries } from './Entries';
import { NewEntry } from './NewEntry';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Entries />} />
        <Route path="/new-entry" element={<NewEntry />} />
      </Route>
    </Routes>
  );
}
