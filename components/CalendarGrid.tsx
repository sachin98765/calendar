"use client"

import { useState, useEffect } from "react"
import {
  getCalendarDays,
  getDateFromDay,
  isToday,
  isSameDay,
  isInRange,
  isWeekend,
} from "@/utils/dateUtils"

interface CalendarGridProps {
  currentDate: Date
  accentColor?: string
  dateRange: {
    start: Date | null
    end: Date | null
  }
  setDateRange: (range: { start: Date | null; end: Date | null }) => void
}

interface DateRange {
  start: Date | null
  end: Date | null
}

export const CalendarGrid = ({
  currentDate,
  accentColor = "#1e88e5",
  dateRange,
  setDateRange,
}: CalendarGridProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const calendarDays = getCalendarDays(currentDate)
  const dayNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

  const handleDateClick = (dayNumber: number) => {
    const clickedDate = getDateFromDay(currentDate, dayNumber)

    setDateRange((prev) => {
      if (prev.end !== null || (prev.start !== null && prev.end === null)) {
        return { start: clickedDate, end: null }
      }
      if (prev.start !== null && prev.end === null) {
        return { start: prev.start, end: clickedDate }
      }
      return { start: clickedDate, end: null }
    })
  }

  const getDateClasses = (dayNumber: number | null): string => {
    if (!isMounted || dayNumber === null) return ""

    const date = getDateFromDay(currentDate, dayNumber)
    const dayOfWeek = date.getDay()
    const isWeekendDay = isWeekend(dayOfWeek)

    let classes = "h-8 flex items-center justify-center rounded-md transition-all duration-200 cursor-pointer text-xs font-semibold relative hover:scale-110"

    // 1. Check if it is the Start or End date
    const isSelected = (dateRange.start && isSameDay(date, dateRange.start)) || 
                       (dateRange.end && isSameDay(date, dateRange.end))

    if (isSelected) {
      return `${classes} text-white font-bold ring-2 ring-offset-1`
    }

    // 2. Check if it is in the selected range
    if (dateRange.start && dateRange.end && isInRange(date, dateRange.start, dateRange.end)) {
      return `${classes} bg-blue-100 text-gray-800`
    }

    // 3. Check if it is Today
    if (isToday(date)) {
      return `${classes} bg-red-100 text-red-600 font-bold ring-2 ring-red-300`
    }

    // 4. FIX: SAT & SUN same color (Weekend Logic)
    if (isWeekendDay) {
      return `${classes} text-blue-500 bg-blue-50 hover:bg-blue-100`
    }

    // 5. Default weekday
    return `${classes} text-gray-700 hover:bg-gray-100`
  }

  // Helper to calculate weeks
  const weeks: (number | null)[][] = []
  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(calendarDays.slice(i, i + 7))
  }

  return (
    <div className="space-y-3">
      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 mb-2 px-1">
        {dayNames.map((day, idx) => (
          <div
            key={day}
            className={`text-center text-xs font-bold tracking-wide py-1 ${
              // idx 5 is Saturday, 6 is Sunday in this array mapping
              idx >= 5 ? "text-blue-500" : "text-gray-600"
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="space-y-0.5 px-1">
        {weeks.map((week, weekIdx) => (
          <div key={weekIdx} className="grid grid-cols-7 gap-0.5">
            {week.map((day, dayIdx) => {
              const date = day ? getDateFromDay(currentDate, day) : null;
              const isSelected = date && (
                (dateRange.start && isSameDay(date, dateRange.start)) || 
                (dateRange.end && isSameDay(date, dateRange.end))
              );

              return (
                <button
                  key={`${weekIdx}-${dayIdx}`}
                  onClick={() => day !== null && handleDateClick(day)}
                  disabled={day === null}
                  className={`${getDateClasses(day)} ${day === null ? "cursor-default" : ""}`}
                  style={isSelected ? { backgroundColor: accentColor } : {}}
                  aria-label={day ? `${currentDate.toLocaleString("default", { month: "long" })} ${day}` : "empty"}
                >
                  {day}
                </button>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}