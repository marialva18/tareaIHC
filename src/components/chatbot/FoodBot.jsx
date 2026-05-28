import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bot, X } from 'lucide-react'
import { botResponses } from '../../data/botResponses'
import { ChatMessage } from './ChatMessage'
import { QuickReplies } from './QuickReplies'

export function FoodBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: '¡Hola! Soy FoodBot 🤖. Puedo recomendarte algo rápido, barato, saludable o en promo.' },
  ])

  function choose(option) {
    setMessages((current) => [
      ...current,
      { role: 'user', text: option.label },
      { role: 'bot', text: botResponses[option.id] },
    ])
  }

  return (
    <>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setOpen(true)} className="fixed bottom-24 left-4 z-30 grid h-16 w-16 place-items-center rounded-full bg-slate-900 text-white shadow-2xl dark:bg-orange-500 lg:bottom-6">
        <Bot size={28} />
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.section initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.96 }} className="fixed bottom-44 left-4 z-40 w-[calc(100%-2rem)] max-w-sm overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-slate-950 lg:bottom-24">
            <div className="flex items-center justify-between bg-orange-500 p-4 text-white">
              <div><p className="font-black">FoodBot</p><p className="text-xs text-orange-100">Asistente simulado</p></div>
              <button onClick={() => setOpen(false)}><X /></button>
            </div>
            <div className="max-h-80 space-y-3 overflow-y-auto p-4">
              {messages.map((message, index) => <ChatMessage key={index} message={message} />)}
            </div>
            <div className="border-t border-orange-100 p-4 dark:border-slate-800"><QuickReplies onSelect={choose} /></div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}
