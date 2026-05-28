import clsx from 'clsx'

export function Badge({ children, tone = 'orange' }) {
  return (
    <span className={clsx(
      'rounded-full px-3 py-1 text-xs font-bold',
      tone === 'orange' && 'bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-200',
      tone === 'green' && 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-200',
      tone === 'gray' && 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-200',
      tone === 'red' && 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-200',
    )}>{children}</span>
  )
}
