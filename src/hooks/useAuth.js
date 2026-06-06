import { useEffect, useState } from 'react'

const STORAGE_KEY = 'campusfood_user'

const initialUser = {
  name: 'María Alva',
  email: 'maria.alva@unmsm.edu.pe',
  phone: '987654321',
  code: '23200123',
  faculty: 'Ingeniería de Sistemas',
  campusPoint: 'Biblioteca Central',
  payment: 'Yape',
}

export function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedUser = localStorage.getItem(STORAGE_KEY)
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
    setLoading(false)
  }, [])

  function saveSession(data) {
    const normalizedUser = {
      ...initialUser,
      ...data,
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone.trim(),
      code: data.code?.trim() || initialUser.code,
      faculty: data.faculty?.trim() || initialUser.faculty,
      campusPoint: data.campusPoint || initialUser.campusPoint,
      payment: data.payment || initialUser.payment,
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizedUser))
    setUser(normalizedUser)
  }

  function login(data) {
    saveSession(data)
  }

  function register(data) {
    saveSession(data)
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }

  return { user, loading, login, register, logout }
}
