import clsx from 'clsx'

export function Button({ children, variant = 'primary', className = '', ...props }) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 font-semibold transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-50',
        variant === 'primary' && 'bg-orange-500 text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600',
        variant === 'secondary' && 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-orange-50 dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-700',
        variant === 'ghost' && 'text-slate-700 hover:bg-orange-50 dark:text-slate-100 dark:hover:bg-slate-800',
        variant === 'danger' && 'bg-red-500 text-white hover:bg-red-600',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
