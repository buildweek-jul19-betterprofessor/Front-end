import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

import StudentsList from './StudentsList';
import StudentForm from './StudentForm';

function Dashboard() {
  const token = localStorage.getItem('token');
  return (
    <div>
      {token ? (
        <div>
          <StudentForm />
          <StudentsList />
        </div>
      ) : (
        <div>
          <h3>Looks like you're not logged in.</h3>

          <p>
            Please{' '}
            <Link style={{ color: 'black' }} to="/register">
              {' '}
              Register{' '}
            </Link>{' '}
            or
            <Link style={{ color: 'black' }} to="/login">
              {' '}
              Login
            </Link>{' '}
          </p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
