"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface ReservationFormProps {
  onSubmit: (formData: {
    checkIn: string
    checkOut: string
    adultos: string
    ninos: string
    departamento: string
    email: string
  }) => Promise<boolean>
}

export function ReservationForm({ onSubmit }: ReservationFormProps) {
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [adultos, setAdultos] = useState("")
  const [ninos, setNinos] = useState("")
  const [departamento, setDepartamento] = useState("No seleccionó ningún departamento en particular")
  const [email, setEmail] = useState("")
  const [formError, setFormError] = useState("")
  const [minCheckOutDate, setMinCheckOutDate] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Establecer la fecha actual en el campo de check-in al cargar la página
  useEffect(() => {
    const currentDate = new Date()
    const formattedDate = currentDate.toISOString().split("T")[0]
    setCheckIn(formattedDate)

    // Actualizar la fecha mínima seleccionable en el campo de check-out
    const nextDay = new Date(currentDate)
    nextDay.setDate(nextDay.getDate() + 1)
    const minDate = nextDay.toISOString().split("T")[0]
    setMinCheckOutDate(minDate)
    setCheckOut(minDate)
  }, [])

  const handleCheckInChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(event.target.value)
    const currentDate = new Date()

    // Verificar si la fecha seleccionada es anterior al día actual
    if (selectedDate < currentDate) {
      // Restablecer la fecha de check-in a la fecha actual
      setCheckIn(currentDate.toISOString().split("T")[0])
      setFormError("La fecha de check-in no puede ser anterior al día actual")
    } else {
      setCheckIn(event.target.value)
      setFormError("")

      // Actualizar la fecha mínima seleccionable en el campo de check-out
      const nextDay = new Date(selectedDate)
      nextDay.setDate(nextDay.getDate() + 1)
      const minDate = nextDay.toISOString().split("T")[0]
      setMinCheckOutDate(minDate)

      // Si la fecha de check-out es anterior a la nueva fecha mínima, actualizarla
      if (new Date(checkOut) <= selectedDate) {
        setCheckOut(minDate)
      }
    }
  }

  const handleCheckOutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckOut(event.target.value)
  }

  const handleAdultosChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdultos(event.target.value)
  }

  const handleNinosChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNinos(event.target.value)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)

    // Si hay un error de email, validar mientras el usuario escribe
    if (formError.includes("correo electrónico")) {
      validateEmail(event.target.value)
    }
  }

  // Función para validar el formato del correo electrónico
  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  // Función para validar el formulario
  const validateForm = () => {
    if (!validateEmail(email)) {
      setFormError("Por favor ingrese un correo electrónico válido")
      return false
    }

    if (!checkIn || !checkOut) {
      setFormError("Por favor seleccione tanto la fecha de check-in como la de check-out")
      return false
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      setFormError("La fecha de check-out debe ser posterior a la fecha de check-in")
      return false
    }

    if (!adultos) {
      setFormError("Por favor seleccione la cantidad de adultos")
      return false
    }

    setFormError("")
    return true
  }

  const handleConsultarDisponibilidad = async () => {
    // Validar el formulario antes de enviar el correo electrónico
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const success = await onSubmit({
        checkIn,
        checkOut,
        adultos,
        ninos,
        departamento,
        email,
      })

      if (success) {
        // Resetear el formulario si se envió correctamente
        setNinos("")
        setAdultos("")
        setEmail("")
        setDepartamento("No seleccionó ningún departamento en particular")

        // Actualizar fechas
        const currentDate = new Date()
        setCheckIn(currentDate.toISOString().split("T")[0])
        const nextDay = new Date(currentDate)
        nextDay.setDate(nextDay.getDate() + 1)
        setCheckOut(nextDay.toISOString().split("T")[0])
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-lg mx-auto">
      <form className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 hover:shadow-2xl border-black">
        <div className="mb-4 flex items-center justify-between">
          <div className="w-1/3">
            <label className="text-gray-700 text-xs lg:text-base font-bold mb-2" htmlFor="check-in">
              Entrada
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="check-in"
              type="date"
              value={checkIn}
              onChange={handleCheckInChange}
              min={new Date().toISOString().split("T")[0]}
              disabled={isSubmitting}
            />
          </div>
          <div className="w-1/3">
            <label className="text-gray-700 text-xs lg:text-base font-bold mb-2" htmlFor="check-out">
              Salida
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="check-out"
              type="date"
              min={minCheckOutDate}
              value={checkOut}
              onChange={handleCheckOutChange}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <div className="w-1/3">
            <label className="text-gray-700 text-xs lg:text-base font-bold mb-2" htmlFor="adults">
              Adultos
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="adults"
              type="number"
              min="1"
              max="5"
              inputMode="numeric"
              value={adultos}
              onChange={handleAdultosChange}
              disabled={isSubmitting}
            />
          </div>
          <div className="w-1/3">
            <label className="text-gray-700 text-xs lg:text-base font-bold mb-2" htmlFor="children">
              Niños
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="children"
              type="number"
              min="0"
              max="4"
              inputMode="numeric"
              value={ninos}
              onChange={handleNinosChange}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="text-gray-700 text-xs lg:text-base font-bold mb-2" htmlFor="departamento">
            Departamento
          </label>
          <div className="relative inline-block w-full">
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer bg-white"
              id="departamento"
              value={departamento}
              onChange={(e) => setDepartamento(e.target.value)}
              disabled={isSubmitting}
            >
              <option value="No seleccionó ningún departamento en particular">Sin preferencias</option>
              <option value="Pb-A">Planta Baja A</option>
              <option value="Pb-B">Planta Baja B</option>
              <option value="1-A">Primero A</option>
              <option value="1-B">Primero B</option>
              <option value="2-B">Segundo B</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex text-xs items-center px-2 text-gray-600">
              ▼
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="text-gray-700 text-xs lg:text-base font-bold mb-2" htmlFor="email">
            Correo Electrónico
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            disabled={isSubmitting}
          />
        </div>

        {formError && <p className="text-red-500 text-xs mb-4">{formError}</p>}

        <div className="flex items-center justify-center">
          <button
            className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-orange md:bg-nav px-4 font-medium text-white transition hover:bg-orange hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            type="button"
            onClick={handleConsultarDisponibilidad}
            disabled={isSubmitting}
          >
            <span className="text-base font-lato flex items-center">
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Consultando...
                </>
              ) : (
                "Consultar disponibilidad"
              )}
            </span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20"></div>
            </div>
          </button>
        </div>
      </form>
    </div>
  )
}
