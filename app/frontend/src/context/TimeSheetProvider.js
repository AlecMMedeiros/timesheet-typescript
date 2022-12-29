import { useState } from 'react';
import { instanceAxios } from '../services/AxiosInstances.services';
import TimeSheetContext from './TimeSheetContext';

function TimeSheetProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [isLoading , setIsLoading] = useState(true);
  

  const getUsers = async () => {   
    const usersList = await instanceAxios.get('user').then((reponse) => reponse.data);    
    setUsers(usersList);
    setIsLoading(false)   
  }


  return (
    <TimeSheetContext.Provider value={{ users, setUsers, isLoading, getUsers }}>
      {children}
    </TimeSheetContext.Provider>
  );
}

export default TimeSheetProvider;
