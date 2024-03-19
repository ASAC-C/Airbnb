'use client'
import React, { useState, Dispatch, SetStateAction, useEffect } from 'react'
import { DayPicker, DateRange } from 'react-day-picker'
import { ko } from 'date-fns/locale'
export default function Calendar({ range, setRange }) {
  const pastMonth = new Date()
  const defaultSelected = {
    from: undefined,
    to: undefined,
  }

  useEffect(() => {}, [range])
  return (
    <DayPicker
      numberOfMonths={2}
      pagedNavigation
      selected={range}
      onSelect={setRange}
      mode="range"
      locale={ko}
    />
  )
}
