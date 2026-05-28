import { botOptions } from '../../data/botResponses'

export function QuickReplies({ onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {botOptions.map((option) => (
        <button key={option.id} onClick={() => onSelect(option)} className="rounded-full bg-white px-3 py-2 text-xs font-bold text-orange-600 ring-1 ring-orange-100 hover:bg-orange-50 dark:bg-slate-900 dark:ring-slate-700">
          {option.label}
        </button>
      ))}
    </div>
  )
}
