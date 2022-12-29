import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside className='w-64' aria-label='Sidebar'>
      <div className='overflow-y-auto py-4 px-3 rounded shadow-md'>
        <ul className='space-y-2'>
          <li className='flex mb-4'>
            <svg
              aria-hidden='true'
              className='flex-shrink-0 w-6 h-6 text-[#007ac3]'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                clipRule='evenodd'
              ></path>
            </svg>
            <button className='flex-1 ml-3 text-slate-50 bg-[#007ac3] rounded-sm hover:shadow-lg hover:ring-2'
            onClick={() => navigate('users')}
            >
              Usuários
            </button>
          </li>
          <li className='flex'>
            <svg
              aria-hidden='true'
              className='flex-shrink-0 w-6 h-6 text-[#007ac3]'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
                clipRule='evenodd'
              ></path>
            </svg>
            <button className='flex-1 ml-3 text-slate-50 bg-[#007ac3] rounded-sm hover:shadow-lg hover:ring-2'>
              Atividades
            </button>
          </li>
        </ul>
        <div className='border-b mt-6'></div>
        <div className='flex mt-2'>
          <button className='flex-1 ml-3 text-slate-50 bg-[#007ac3] rounded-sm hover:shadow-lg hover:ring-2'>
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}
