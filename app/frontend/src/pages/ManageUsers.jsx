import { useContext } from 'react';
import Header from '../components/Header';
import TimeSheetContext from '../context/TimeSheetContext';

export default function ManageUsers() {
  const { users } = useContext(TimeSheetContext);
  return (
    <>
      <Header />
      <section className='grid grid-cols-1 rounded-md bg-[#262626] text-gray-300'>
        {users.map((user) => (
          <div
            className='flex flex-col shadow-md mx-5 my-2 items-center w-auto'
            key={user.id}
          >
            <p>Nome: {user.displayName}</p>
            <p>Email: {user.email}</p>
            <div className='grid grid-row-2 gap-2 w-auto text-center'>
              {user.jobs.map((job) => (
                <div className='flex gap-2 shadow-md' key={user.id}>
                  <span>Título: {job.title}</span>
                  <span>Descrição: {job.description}</span>
                  <span>O.S: {job.os}</span>
                  <span>Status: {job.status}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
