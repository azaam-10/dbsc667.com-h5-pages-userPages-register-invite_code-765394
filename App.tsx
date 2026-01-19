
import React from 'react';
import Dashboard from './components/Dashboard';
import TransactionModal from './components/TransactionModal';

const App: React.FC = () => {
  return (
    <div className="max-w-md mx-auto shadow-2xl relative bg-[#F5F9FC] overflow-hidden">
      <Dashboard />
      <TransactionModal />
    </div>
  );
};

export default App;
