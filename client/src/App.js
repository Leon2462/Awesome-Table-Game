import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import { Layout } from './hoc/Layout/Layout';

function App() {
  const routes = useRoutes(false)
  return (
    <Router>
      <Layout>
        {routes}
      </Layout>
    </Router>
  );
}

export default App
