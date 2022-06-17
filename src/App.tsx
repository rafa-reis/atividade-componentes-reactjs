import React from 'react';
import GlobalStyle from './config/GlobalStyle';
import AppRoutes from './routes/AppRoutes';


const App: React.FC = () => {
  return (

        <>
        <GlobalStyle />
        <AppRoutes />
        </>
        
  );
}

export default App;
