import { ArrowDownCircle, ArrowUpCircle, Wallet } from 'lucide-react';

function formatCurrency(v) {
  try {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(v || 0);
  } catch {
    return `$${Number(v || 0).toFixed(2)}`;
  }
}

function SummaryCards({ balance, income, expense }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="col-span-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 sm:col-span-1">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-emerald-500/15 p-2 ring-1 ring-emerald-400/30">
            <ArrowUpCircle className="h-5 w-5 text-emerald-300" />
          </div>
          <div>
            <p className="text-xs text-white/60">Income</p>
            <p className="text-lg font-semibold">{formatCurrency(income)}</p>
          </div>
        </div>
      </div>

      <div className="col-span-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 sm:col-span-1">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-rose-500/15 p-2 ring-1 ring-rose-400/30">
            <ArrowDownCircle className="h-5 w-5 text-rose-300" />
          </div>
          <div>
            <p className="text-xs text-white/60">Expenses</p>
            <p className="text-lg font-semibold">{formatCurrency(expense)}</p>
          </div>
        </div>
      </div>

      <div className="col-span-3 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.06] p-4 ring-1 ring-white/10 sm:col-span-1">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-sky-500/15 p-2 ring-1 ring-sky-400/30">
            <Wallet className="h-5 w-5 text-sky-300" />
          </div>
          <div>
            <p className="text-xs text-white/60">Balance</p>
            <p className="text-lg font-semibold">{formatCurrency(balance)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryCards;
