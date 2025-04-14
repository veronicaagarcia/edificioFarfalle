"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface ContactFormProps {
  onSubmit: (nombre: string, email: string, message: string) => Promise<boolean>
  formSubmitted: boolean
}

export function ContactForm({ onSubmit, formSubmitted }: ContactFormProps) {
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [nombre, setNombre] = useState("")
  const [emailError, setEmailError] = useState("")
  const [messageError, setMessageError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Resetear el formulario cuando se envía correctamente
  useEffect(() => {
    if (formSubmitted) {
      setMessage("")
      setEmail("")
      setNombre("")
      setEmailError("")
      setMessageError("")
    }
  }, [formSubmitted])

  const handleNombreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(event.target.value)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    if (emailError) validateEmail(event.target.value)
  }

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
    if (messageError && event.target.value.trim() !== "") {
      setMessageError("")
    }
  }

  // Función para validar el formato del correo electrónico
  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/
    const isValid = re.test(email)
    setEmailError(isValid ? "" : "Por favor ingrese un correo electrónico válido")
    return isValid
  }

  const validateForm = () => {
    let isValid = true

    if (!validateEmail(email)) {
      isValid = false
    }

    if (message.trim() === "") {
      setMessageError("Por favor ingrese su mensaje")
      isValid = false
    } else {
      setMessageError("")
    }

    return isValid
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      await onSubmit(nombre, email, message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="p-4 mx-auto w-full h-80 flex flex-col justify-evenly">
      <input
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="nombre"
        type="text"
        value={nombre}
        onChange={handleNombreChange}
        placeholder="Nombre"
        aria-label="Nombre"
        disabled={isSubmitting}
      />

      <textarea
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
        id="message"
        value={message}
        onChange={handleMessageChange}
        placeholder="Envía tu consulta aquí..."
        aria-label="Mensaje"
        rows={4}
        disabled={isSubmitting}
      />
      {messageError && <p className="text-red-500 text-sm mt-1">{messageError}</p>}

      <input
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Correo electrónico"
        aria-label="Correo electrónico"
        disabled={isSubmitting}
      />
      {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}

      <button
        type="button"
        onClick={handleSubmit}
        className="group relative inline-flex mb-4 h-10 items-center justify-center overflow-hidden rounded-md bg-nav px-4 font-medium text-neutral-200 transition hover:bg-orange hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        <span className="relative text-base font-lato flex items-center">
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Enviando...
            </>
          ) : (
            "Enviar"
          )}
        </span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
          <div className="relative h-full w-8 bg-white/20"></div>
        </div>
      </button>
    </form>
  )
}
