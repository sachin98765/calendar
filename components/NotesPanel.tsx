"use client"

import { useEffect, useState } from "react"

interface NotesPanelProps {
  month: number
  year: number
}

const NOTES_STORAGE_KEY = "calendar_notes"

export const NotesPanel = ({ month, year }: NotesPanelProps) => {
  const [notes, setNotes] = useState("")
  const [isMounted, setIsMounted] = useState(false)

  const notesKey = `${NOTES_STORAGE_KEY}_${year}_${month}`

  useEffect(() => {
    setIsMounted(true)
    // Load notes from localStorage
    const savedNotes = localStorage.getItem(notesKey) || ""
    setNotes(savedNotes)
  }, [notesKey])

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newNotes = e.target.value
    setNotes(newNotes)
    // Save to localStorage
    localStorage.setItem(notesKey, newNotes)
  }

  if (!isMounted) return null

  return (
    <div className="flex flex-col space-y-1.5">
      <h3 className="text-xs font-bold text-gray-700 uppercase tracking-widest">
        Notes
      </h3>

      <textarea
        value={notes}
        onChange={handleNotesChange}
        placeholder="Add notes..."
        className="w-full h-24 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white hover:bg-gray-50 text-xs text-gray-700 leading-relaxed transition-colors placeholder-gray-400"
      />

   
    </div>
  )
}
