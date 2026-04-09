"use client"

import { useState } from "react"
import { HeroSection } from "./HeroSection"
import { CalendarGrid } from "./CalendarGrid"
import { NotesPanel } from "./NotesPanel"
import { CalendarHanger } from "./CalendarHanger"
import { addMonths } from "@/utils/dateUtils"

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [accentColor, setAccentColor] = useState("#1e88e5")
  const [isFlipping, setIsFlipping] = useState(false)
  const [dateRange, setDateRange] = useState<{
    start: Date | null
    end: Date | null
  }>({
    start: null,
    end: null,
  })

  // Premium mountain/adventure image
  const defaultImage =
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=500&fit=crop&crop=entropy&cs=tinysrgb&q=80"

  const goToPreviousMonth = () => {
    setIsFlipping(true)
    setTimeout(() => {
      setCurrentDate(addMonths(currentDate, -1))
      setIsFlipping(false)
    }, 300)
  }

  const goToNextMonth = () => {
    setIsFlipping(true)
    setTimeout(() => {
      setCurrentDate(addMonths(currentDate, 1))
      setIsFlipping(false)
    }, 300)
  }

  const goToToday = () => {
    setIsFlipping(true)
    setTimeout(() => {
      setCurrentDate(new Date())
      setIsFlipping(false)
    }, 300)
  }

  const monthName = currentDate.toLocaleString("default", { month: "long" }).toUpperCase()
  const yearNumber = currentDate.getFullYear()

  // Calculate day difference from today
  const calculateDayDifference = (date: Date): string => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const targetDate = new Date(date)
    targetDate.setHours(0, 0, 0, 0)

    const diffMs = targetDate.getTime() - today.getTime()
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if (days === 0) {
      return "Today"
    } else if (days > 0) {
      return `In ${days} day${days > 1 ? "(s)" : ""}`
    } else {
      const absDays = Math.abs(days)
      return `${absDays} day${absDays > 1 ? "s" : ""} ago`
    }
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-4 px-4 bg-gradient-to-b from-gray-900/5 via-gray-100 to-gray-200/80">
      {/* Premium Calendar Hanger */}
      <CalendarHanger />

      {/* Main Calendar Card - Professional Wall Calendar */}
      <div className="relative w-full max-w-sm bg-white  overflow-hidden calendar-container -mt-3" 
      style={{
        boxShadow: "rgba(0, 0, 0, 0.2) -60px 0px 40px -7px"
      }}>
        {/* Hero Image Section */}
        <div
          className={`transition-all duration-300 ${
            isFlipping ? "opacity-30 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <HeroSection
            imageUrl={defaultImage}
            currentDate={currentDate}
            accentColor={accentColor}
          />
        </div>

        {/* Divider Line */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        {/* Main Content Area - 2 Column Grid for Desktop */}
        <div className="grid grid-cols-3 gap-0">
          {/* Left Column - Notes */}
          <div className="col-span-1 border-r border-gray-200 p-4">
            <NotesPanel
              month={currentDate.getMonth()}
              year={currentDate.getFullYear()}
            />
          </div>

          {/* Right Column - Calendar */}
          <div className="col-span-2 p-4">
            {/* Month Navigation Controls */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <button
                onClick={goToPreviousMonth}
                className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600 hover:text-gray-900"
                aria-label="Previous month"
                title="Previous Month"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="text-center flex-1">
                <p className="text-xs font-bold text-gray-700 tracking-widest uppercase">{monthName}</p>
              </div>
              <button
                onClick={goToNextMonth}
                className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600 hover:text-gray-900"
                aria-label="Next month"
                title="Next Month"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Calendar Grid */}
            <div
              className={`transition-all duration-300 ${
                isFlipping ? "opacity-30 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <CalendarGrid
                currentDate={currentDate}
                accentColor={accentColor}
                dateRange={dateRange}
                setDateRange={setDateRange}
              />
            </div>
          </div>
        </div>

        {/* Footer - Date Range Display */}
        <div className="border-t border-gray-200 px-4 py-3 bg-gray-50 flex items-center justify-between">
          {dateRange.start ? (
            <div className="flex items-center gap-4 text-xs w-full">
              <div className="flex gap-4">
                <span className="text-gray-600">
                  <span className="font-bold text-blue-600">{calculateDayDifference(dateRange.start)}</span>
                </span>
                {dateRange.end && (
                  <span className="text-gray-600">
                    <span className="font-bold text-blue-600">{calculateDayDifference(dateRange.end)}</span>
                  </span>
                )}
              </div>
              <button
                onClick={() => setDateRange({ start: null, end: null })}
                className="ml-auto text-xs font-semibold text-blue-600 hover:text-blue-700 underline"
              >
                Clear
              </button>
            </div>
          ) : (
            <span className="text-xs text-gray-500">. . .</span>
          )}
        </div>
      </div>
    </div>
  )
}
