import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function FullPageBackground({ children, className = '' }: Props) {
  return (
    <div className={`fixed inset-0 pointer-events-none -z-10 ${className}`} aria-hidden>
      {children}
    </div>
  )
}
