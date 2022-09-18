import React from 'react'

export function ViolationRow({ ...violation }) {
  return <li>{violation.payload.message}</li>
}
