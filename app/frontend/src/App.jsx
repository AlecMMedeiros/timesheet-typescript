import { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { useContext } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TimeSheetContext from "./context/TimeSheetContext";
import ManageUsers from "./pages/ManageUsers";

function App() {
  const { getUsers } = useContext(TimeSheetContext)
  
  useEffect(()=>{
    getUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (   
    <main className="flex flex-col mx-5">
      <Header />
      <div className="flex justify-between">
      <Sidebar />
      <Routes>
        <Route path="/users" element={<ManageUsers />}></Route>
      </Routes>   
      </div>
    </main>
  );
}

export default App;
