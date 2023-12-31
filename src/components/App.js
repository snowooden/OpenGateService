import React from 'react';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import Quiz1 from './Quiz1';
import Quiz2 from './Quiz2';
import Result from './Result';
import Answer1 from './Answer1';
import Answer2 from './Answer2';
import store from '../redux/store'; // Import your Redux store
import { AnimatePresence } from 'framer-motion';
import Quiz3 from './Quiz3';
import Answer3 from './Answer3';
import Quiz4 from './Quiz4';
import Answer4 from './Answer4';
import Quiz5 from './Quiz5';
import Answer5 from './Answer5';
import Quiz6 from './Quiz6';
import Answer6 from './Answer6';
import Quiz7 from './Quiz7';
import Answer7 from './Answer7';
import Quiz8 from './Quiz8';
import Answer8 from './Answer8';
import Quiz9 from './Quiz9';
import Answer9 from './Answer9';
import Quiz10 from './Quiz10';
import Answer10 from './Answer10';
import Quiz11 from './Quiz11';
import Answer11 from './Answer11';
import Quiz12 from './Quiz12';
import Answer12 from './Answer12';
import Quiz13 from './Quiz13';
import Answer13 from './Answer13';
import Quiz14 from './Quiz14';
import Answer14 from './Answer14';
import Quiz15 from './Quiz15';
import Answer15 from './Answer15';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/quiz1',
    element: <Quiz1 />,
  },  
  {
    path: '/quiz2',
    element: <Quiz2 />,
  },
  {
    path: '/result',
    element: <Result />,
  },
  {
    path: '/answer1',
    element: <Answer1 />,
  },
  {
    path: '/answer2',
    element: <Answer2 />,
  },
  {
    path: '/quiz3',
    element: <Quiz3 />,
  },
  {
    path: '/answer3',
    element: <Answer3 />,
  },
  {
    path: '/quiz4',
    element: <Quiz4 />,
  },
  {
    path: '/answer4',
    element: <Answer4 />,
  },
  {
    path: '/quiz5',
    element: <Quiz5 />,
  },
  {
    path: '/answer5',
    element: <Answer5 />,
  },
  {
    path: '/quiz6',
    element: <Quiz6 />,
  },
  {
    path: '/answer6',
    element: <Answer6 />,
  },
  {
    path: '/quiz7',
    element: <Quiz7 />,
  },
  {
    path: '/answer7',
    element: <Answer7 />,
  },
  {
    path: '/quiz8',
    element: <Quiz8 />,
  },
  {
    path: '/answer8',
    element: <Answer8 />,
  },
  {
    path: '/quiz9',
    element: <Quiz9 />,
  },
  {
    path: '/answer9',
    element: <Answer9 />,
  },
  {
    path: '/quiz10',
    element: <Quiz10 />,
  },
  {
    path: '/answer10',
    element: <Answer10 />,
  },
  {
    path: '/quiz11',
    element: <Quiz11 />,
  },
   {
    path: '/answer11',
    element: <Answer11 />,
  },
  {
    path: '/quiz12',
    element: <Quiz12 />,
  },
  {
    path: '/answer12',
    element: <Answer12 />,
  },
   {
    path: '/quiz13',
    element: <Quiz13 />,
  },
  {
    path: '/answer13',
    element: <Answer13 />,
  },
{
    path: '/quiz14',
    element: <Quiz14 />,
  },
  {
    path: '/answer14',
    element: <Answer14 />,
  },
  {
    path: '/quiz15',
    element: <Quiz15 />,
  },
  {
    path: '/answer15',
    element: <Answer15 />,
  },





]);

function App() {
  return (
    // Wrap your app with the Provider and pass your Redux store
    <Provider store={store}>
      <AnimatePresence>
        <RouterProvider router={router}></RouterProvider>
      </AnimatePresence>
    </Provider>
  );
}

export default App;
