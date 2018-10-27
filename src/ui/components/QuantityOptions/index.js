import React from 'react'

export const QuantityOptions = () => {
  return (
    Array(21)
      .fill()
      .map((_, i) => (
        <option key={i}>{i}</option>
      ))
  )
}