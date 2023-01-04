import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TimeSheetContext from './context/TimeSheetContext';
import ManageUsers from './pages/ManageUsers';
import Dashboard from './pages/Dashboard';
import ManageActivities from './pages/ManageActivities';

function App() {
 

  return (
    <main className='flex flex-col mx-5'>
      <Header />
      <div className='flex justify-between'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/users' element={<ManageUsers />}></Route>
          <Route path='/activities' element={<ManageActivities />}></Route>
        </Routes>
      </div>
    </main>
  );
}

export default App;
