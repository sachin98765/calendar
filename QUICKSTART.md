# ⚡ QUICK START GUIDE

## 🚀 Run the Calendar in 30 Seconds

You're in: c:\Users\ACER\Documents\calendar-2

### 1️⃣ Open Terminal/Command Prompt

Make sure you're in the calendar-2 directory

### 2️⃣ Start Development Server

```bash
npm run dev
```

### 3️⃣ Open Browser

Go to: http://localhost:3000

That's it! 🎉

---

## 📖 What You'll See

✨ A stunning wall calendar with:

- Beautiful mountain image at the top
- Blue diagonal overlay with year and month
- Interactive calendar grid with date selection
- Notes section that saves automatically
- Smooth animations and hover effects
- Responsive design (works great on mobile too!)

---

## 🎮 Try These Features

1. **Select a Date Range**
   - Click a date to start selection (turns blue)
   - Click another date to end selection (light blue background between them)
   - Click again to clear and start over

2. **Write Notes**
   - Type in the notes area
   - Refreshes the page - notes still there! (saved in browser)

3. **Navigate Months**
   - Click "← Prev" to go back
   - Click "Today" to jump to today
   - Click "Next →" to go forward
   - Watch the smooth flip animation!

4. **Hover Effects**
   - Hover over date numbers to see them scale up
   - Weekends (Sat/Sun) have a blue background
   - Today's date highlighted in red

---

## 📱 Responsive Design

**Desktop View (1024px+)**

- Notes on the left
- Calendar on the right
- Side-by-side layout

**Mobile View (<1024px)**

- Full-width calendar
- Notes below calendar
- Touch-friendly buttons

---

## 🛠 Available Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run linter
```

---

## 📂 What's Inside?

```
calendar-2/
├── app/
│   ├── page.tsx         ← Main page (shows Calendar component)
│   ├── layout.tsx       ← Root layout
│   └── globals.css      ← Custom global styles
├── components/          ← Reusable React components
│   ├── Calendar.tsx     ← Main calendar (month nav, layout)
│   ├── CalendarGrid.tsx ← Date grid with selection
│   ├── HeroSection.tsx  ← Top image section
│   ├── NotesPanel.tsx   ← Notes textarea
│   └── SpiralBinding.tsx ← Top spiral effect
├── utils/               ← Helper functions
│   ├── dateUtils.ts     ← Date calculations
│   └── colorUtils.ts    ← Color helpers
└── package.json         ← Dependencies

README.md              ← Full documentation
QUICKSTART.md          ← This file! 👈
```

---

## 🎨 Customization

### Change the Image

Edit `components/Calendar.tsx` line 16:

```typescript
const defaultImage = "PASTE_YOUR_IMAGE_URL_HERE"
```

### Change the Blue Accent Color

Edit `components/Calendar.tsx` line 12:

```typescript
const [accentColor, setAccentColor] = useState("#NEW_COLOR_HEX")
```

---

## 🐛 Issues?

**Notes not saving?**

- Check browser's Developer Tools > Application > Local Storage
- You should see entries like `calendar_notes_2026_03`

**Image not showing?**

- Check your internet connection
- The image loads from Unsplash by default
- You can replace with your own URL

**Styles look weird?**

- Ctrl+Shift+Delete to clear browser cache
- Restart dev server (Ctrl+C, then `npm run dev` again)

---

## 📚 For More Details

See README.md for:

- Full feature list
- Implementation details
- Browser support
- Mobile optimization
- Advanced customization

---

## 💡 Pro Tips

✅ Notes are saved per month (separate for April vs May)
✅ Date selections are NOT saved (cleared on refresh)
✅ All CSS comes from Tailwind - modify tailwind.config.ts for style changes
✅ All components are TypeScript for type safety
✅ Images use Next.js Image component for optimization

---

**Ready to explore? Type `npm run dev` and enjoy! 🚀**
