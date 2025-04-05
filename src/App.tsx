import React from 'react';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Website</h1>
        <p className="text-lg text-gray-600">
          This is your main content area. Add your content here.
        </p>
      </div>
    </Layout>
  );
}

export default App;
