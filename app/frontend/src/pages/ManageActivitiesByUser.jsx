import { useContext } from 'react';
import TimeSheetContext from '../context/TimeSheetContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../styles/react-tabs.css';
import { useEffect } from 'react';

export default function ManageActivitiesByUser() {
  const { userActivity, isLoading, getActivitiesByUserId } = useContext(TimeSheetContext);

const userId = window.location.pathname.split('/')[2]


console.log(userId)

useEffect(() => {
  getActivitiesByUserId(userId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
return (
  <>
      <section className='overflow-x-auto relative shadow-md sm:rounded-lg w-full mx-2 h-full'>
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <Tabs>
            <TabList>
              <Tab>Listar Atividades</Tab>
              <Tab>Cadastrar Atividades</Tab>
            </TabList>
            <TabPanel>
              <table className='w-full text-sm text-center text-gray-500 dark:text-gray-400'>
                <thead className='bg-[#007ac3] text-xs text-white uppercase'>
                  <tr>
                    <th scope='col' className='py-3 px-6'>
                      #
                    </th>
                    <th scope='col' className='py-3 px-6'>
                      Tipo
                    </th>
                    <th scope='col' className='py-3 px-6'>
                      DATA
                    </th>
                    <th scope='col' className='py-3 px-6'>
                      Horas
                    </th>
                    <th scope='col' className='py-3 px-6'>
                      Colaborador
                    </th>
                    <th scope='col' className='py-3 px-6'></th>
                  </tr>
                </thead>
                <tbody>
                  {userActivity.map((activity) => (
                    <tr
                      key={activity.id}
                      className='bg-white border-b shadow-sm'
                    >
                      <td className='py-4 px-6'>{activity.id}</td>
                      <td className='py-4 px-6'>{activity.activity}</td>
                      <td className='py-4 px-6'>{activity.date}</td>
                      <td className='py-4 px-6'>{activity.hours}</td>
                      <td className='py-4 px-6'>
                        {activity.users[0].displayName}
                      </td>
                      <td className='py-4 px-6'>
                        <button className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                          Exibir todas a horas
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        )}
      </section>
    </>
  );
}
