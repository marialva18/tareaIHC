export function ChatMessage({ message }) {
  const isBot = message.role === 'bot'
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm ${isBot ? 'bg-orange-50 text-slate-700 dark:bg-slate-800 dark:text-slate-100' : 'bg-orange-500 text-white'}`}>
        {message.text}
      </div>
    </div>
  )
}
