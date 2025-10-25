import { ArrowDownCircle, ArrowUpCircle, Trash2 } from 'lucide-react';

function formatCurrency(v) {
  try {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(v || 0);
  } catch {
    return `$${Number(v || 0).toFixed(2)}`;
  }
}

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  } catch {
    return iso;
  }
}

function TransactionList({ transactions, onDelete }) {
  const sorted = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));

  if (!sorted.length) {
    return (
      <div className="rounded-2xl bg-white/5 p-6 text-center text-white/60 ring-1 ring-white/10">
        No transactions yet. Add your first one above.
      </div>
    );
  }

  return (
    <div className="divide-y divide-white/5 overflow-hidden rounded-2xl ring-1 ring-white/10">
      {sorted.map((t) => (
        <div key={t.id} className="flex items-center gap-3 bg-white/[0.02] px-4 py-3">
          <div className={`grid place-items-center rounded-xl p-2 ring-1 ${t.type === 'income' ? 'bg-emerald-500/15 ring-emerald-400/30' : 'bg-rose-500/15 ring-rose-400/30'}`}>
            {t.type === 'income' ? (
              <ArrowUpCircle className="h-5 w-5 text-emerald-300" />
            ) : (
              <ArrowDownCircle className="h-5 w-5 text-rose-300" />
            )}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">{t.title}</p>
            <p className="text-xs text-white/60">{t.category} • {formatDate(t.date)}</p>
          </div>
          <div className={`text-sm font-semibold ${t.type === 'income' ? 'text-emerald-300' : 'text-rose-300'}`}>
            {t.type === 'income' ? '+' : '-'}{formatCurrency(t.amount)}
          </div>
          <button
            aria-label="Delete"
            onClick={() => onDelete(t.id)}
            className="ml-2 rounded-lg p-2 text-white/60 hover:bg-white/10 hover:text-white"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;
