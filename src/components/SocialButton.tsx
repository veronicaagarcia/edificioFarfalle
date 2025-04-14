"use client"

import type { ReactNode } from "react"
import { Card } from "@mui/material"
import { Link } from "react-router-dom"

interface SocialButtonProps {
  icon: ReactNode
  link?: string
  action?: () => void
  ariaLabel: string
}

export function SocialButton({ icon, link, action, ariaLabel }: SocialButtonProps) {
  const renderButton = () => (
    <Card
      style={{
        backgroundColor: "#0f172a",
        transition: "background-color 0.3s",
      }}
      className="hover:shadow-md hover:shadow-slate-900 hover:scale-105 rounded-none md:rounded-full w-fit p-2 md:p-3"
    >
      <div className="items-center flex justify-start">{icon}</div>
    </Card>
  )

  if (link) {
    return (
      <Link to={link} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
        {renderButton()}
      </Link>
    )
  }

  return (
    <button onClick={action} className="flex justify-start items-center" aria-label={ariaLabel}>
      {renderButton()}
    </button>
  )
}
