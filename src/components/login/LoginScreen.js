import React, { useContext, useReducer } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

export const LoginScreen = () => {

    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();
    const lastPath = localStorage.getItem('lastPath') || '/';

    const handleLogin = () => {
      const action = {
        type: types.login,
        payload: {
          name: 'Albert',
        }
      }
      dispatch(action);
      navigate(lastPath, {
        replace: true
      });
    }
    return (
      <div className='container mt-5'>
          <h1>LoginScreen</h1>
          <hr />

          <button
            className='btn btn-primary'
            onClick={handleLogin}
          >
            Login
          </button>
      </div>
    )
}
