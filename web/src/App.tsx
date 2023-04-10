import React, { useEffect, useState } from 'react';
import logo from './EMMALogo.png';
import { App as CapacitorApp, URLOpenListenerEvent } from '@capacitor/app';
import './App.css';

const AppUrlListener: React.FC = () => {
  const [date, setDate] = useState<string>(new Date().toISOString());

  useEffect(() => {
    CapacitorApp.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      setDate(new Date().toISOString())
    });
  }, []);

  return (<p>{date}</p>);
};

function App() {
  const [randomColor] = useState<string>(`#${Math.floor(Math.random()*16777215).toString(16)}`);
  return (
    <div className="App" style={{backgroundColor: randomColor}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <AppUrlListener />
    </div>
  );
}

export default App;
