import { useState } from 'react';
import { instanceAxios } from '../services/AxiosInstances.services';
import TimeSheetContext from './TimeSheetContext';

function TimeSheetProvider({ children }) {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const usersList = await instanceAxios.get('user').then((reponse) => reponse.data);
    setUsers(usersList);
  }


  return (
    <TimeSheetContext.Provider value={{ users, setUsers, getUsers }}>
      {children}
    </TimeSheetContext.Provider>
  );
}

export default TimeSheetProvider;
