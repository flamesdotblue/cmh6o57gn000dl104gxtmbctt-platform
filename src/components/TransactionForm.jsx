import { useState } from 'react';
import { Plus } from 'lucide-react';

function todayISO() {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${mm}-${dd}`;
}

function TransactionForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('General');
  const [date, setDate] = useState(todayISO());

  const submit = (e) => {
    e.preventDefault();
    const amt = parseFloat(amount);
    if (!title.trim() || isNaN(amt) || amt <= 0) return;
    onAdd({ title: title.trim(), amount: amt, type, category, date });
    setTitle('');
    setAmount('');
    setType('expense');
    setCategory('General');
    setDate(todayISO());
  };

  return (
    <form onSubmit={submit} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-2">
          <label className="mb-1 block text-xs text-white/70">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Coffee, Salary…"
            className="w-full rounded-xl bg-black/40 px-3 py-2 text-sm outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs text-white/70">Amount</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            inputMode="decimal"
            placeholder="0.00"
            className="w-full rounded-xl bg-black/40 px-3 py-2 text-sm outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs text-white/70">Type</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setType('expense')}
              className={`rounded-xl px-3 py-2 text-sm ring-1 ${type === 'expense' ? 'bg-rose-500/20 ring-rose-400/40' : 'bg-black/40 ring-white/10'}`}
            >Expense</button>
            <button
              type="button"
              onClick={() => setType('income')}
              className={`rounded-xl px-3 py-2 text-sm ring-1 ${type === 'income' ? 'bg-emerald-500/20 ring-emerald-400/40' : 'bg-black/40 ring-white/10'}`}
            >Income</button>
          </div>
        </div>

        <div>
          <label className="mb-1 block text-xs text-white/70">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full appearance-none rounded-xl bg-black/40 px-3 py-2 text-sm outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
          >
            <option>General</option>
            <option>Food & Drink</option>
            <option>Transport</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>Health</option>
            <option>Salary</option>
            <option>Investments</option>
          </select>
        </div>

        <div className="col-span-2">
          <label className="mb-1 block text-xs text-white/70">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-xl bg-black/40 px-3 py-2 text-sm outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
          />
        </div>

        <div className="col-span-2">
          <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold active:scale-[.99]">
            <Plus className="h-4 w-4" />
            Add Transaction
          </button>
        </div>
      </div>
    </form>
  );
}

export default TransactionForm;
