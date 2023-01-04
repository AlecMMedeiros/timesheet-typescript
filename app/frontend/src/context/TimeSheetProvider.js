import { useState } from 'react';
import { instanceAxios } from '../services/AxiosInstances.services';
import TimeSheetContext from './TimeSheetContext';

function TimeSheetProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [userActivity, setUserActivity] = useState([]);
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    const usersList = await instanceAxios
      .get('user')
      .then((reponse) => reponse.data);
    setUsers(usersList);
    setIsLoading(false);
  };

  const getActivities = async () => {
    const activitiesList = await instanceAxios
      .get('activity')
      .then((reponse) => reponse.data); 
    setActivities(activitiesList);
    setIsLoading(false);
  };

  const getActivitiesByUserId = async (id) => {
    const activitiesList = await instanceAxios
      .get(`/user/${id}/activity`)
      .then((reponse) => reponse.data);
    setUserActivity(activitiesList);
    setIsLoading(false);
  };

  return (
    <TimeSheetContext.Provider
      value={{
        users,
        userActivity,
        setUsers,
        activities,
        setActivities,
        isLoading,
        getUsers,
        getActivities,
        getActivitiesByUserId
      }}
    >
      {children}
    </TimeSheetContext.Provider>
  );
}

export default TimeSheetProvider;
