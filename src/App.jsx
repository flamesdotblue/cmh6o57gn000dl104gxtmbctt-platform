import { useEffect, useMemo, useState } from 'react';
import HeroCover from './components/HeroCover';
import SummaryCards from './components/SummaryCards';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

function App() {
  const [transactions, setTransactions] = useState(() => {
    try {
      const raw = localStorage.getItem('moneytrack:transactions');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('moneytrack:transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (tx) => {
    setTransactions((prev) => [
      { id: crypto.randomUUID(), ...tx },
      ...prev,
    ]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  const { income, expense, balance } = useMemo(() => {
    const income = transactions.filter(t => t.type === 'income').reduce((a, b) => a + Number(b.amount || 0), 0);
    const expense = transactions.filter(t => t.type === 'expense').reduce((a, b) => a + Number(b.amount || 0), 0);
    const balance = income - expense;
    return { income, expense, balance };
  }, [transactions]);

  return (
    <div className="min-h-screen w-full bg-black text-white font-inter">
      <HeroCover />

      <main className="mx-auto w-full max-w-md px-4 -mt-16 relative z-10">
        <SummaryCards balance={balance} income={income} expense={expense} />

        <section aria-label="Add transaction" className="mt-6">
          <TransactionForm onAdd={addTransaction} />
        </section>

        <section aria-label="Recent transactions" className="mt-6 pb-24">
          <TransactionList transactions={transactions} onDelete={deleteTransaction} />
        </section>
      </main>
    </div>
  );
}

export default App;
