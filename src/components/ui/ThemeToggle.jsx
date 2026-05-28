import { Moon, Sun } from 'lucide-react'
import { Button } from './Button'

export function ThemeToggle({ dark, toggleTheme }) {
  return (
    <Button variant="secondary" onClick={toggleTheme} aria-label="Cambiar tema" className="h-11 w-11 p-0">
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </Button>
  )
}
