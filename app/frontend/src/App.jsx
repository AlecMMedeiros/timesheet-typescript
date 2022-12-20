import { useEffect } from "react";
import { useContext } from "react";
import TimeSheetContext from "./context/TimeSheetContext";
import ManageUsers from "./pages/ManageUsers";

function App() {
  const { getUsers } = useContext(TimeSheetContext)
  
  useEffect(()=>{
    getUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (   
    <main className="App">
      <ManageUsers />
    </main>
  );
}

export default App;
