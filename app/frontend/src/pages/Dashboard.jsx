import { useContext } from 'react';
import TimeSheetContext from '../context/TimeSheetContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../styles/react-tabs.css';

export default function Dashboard() {
  const { users, isLoading } = useContext(TimeSheetContext);
  return (
    <>
      <section className='overflow-x-auto relative shadow-md sm:rounded-lg w-full mx-2 h-full'>
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <Tabs>
            <TabList>
              <Tab>Listar Usuários</Tab>
              <Tab>Cadastrar Usuários</Tab>
            </TabList>
            <TabPanel>
              <table className='w-full text-sm text-center text-gray-500 dark:text-gray-400'>
                <thead className='bg-[#007ac3] text-xs text-white uppercase'>
                  <tr>
                    <th scope='col' className='py-3 px-6'>
                      #
                    </th>
                    <th scope='col' className='py-3 px-6'>
                      Nome
                    </th>
                    <th scope='col' className='py-3 px-6'>
                      Email
                    </th>
                    <th scope='col' className='py-3 px-6'>
                      Atividades
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className='bg-white border-b shadow-sm'>
                      <td className='py-4 px-6'>{user.id}</td>
                      <td className='py-4 px-6'>{user.displayName}</td>
                      <td className='py-4 px-6'>{user.email}</td>
                      <td className='py-4 px-6'>
                        <button className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                          Listar
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
