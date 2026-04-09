# 📅 Premium Wall Calendar UI

A pixel-perfect, fully functional React (Next.js) wall calendar component with interactive features, beautiful design, and smooth animations.

## ✨ Features

### Core Features

- ✅ **Premium Wall Calendar Design** - Modern, clean aesthetic with diagonal overlay
- ✅ **Date Range Selection** - Click first date (start), click second date (end)
- ✅ **Notes Section** - Per-month notes that persist in localStorage
- ✅ **Month Navigation** - Previous/Next/Today buttons with smooth transitions
- ✅ **Responsive Design** - Desktop (2-column) and mobile (stacked) layouts
- ✅ **Spiral Binding Effect** - Visual wall calendar binding at the top
- ✅ **Drop Shadows** - Realistic card elevation

### Bonus Features Implemented

- ✅ **Smooth Hover Animations** - Dates scale up on hover (1.1x)
- ✅ **Flip Transition Animation** - Month changes trigger smooth flip effect
- ✅ **Today's Date Highlight** - Current day highlighted in red with special styling
- ✅ **Weekend Highlighting** - Saturdays and Sundays shown in blue tone
- ✅ **Date Range Styling** - Visual feedback for selected ranges with gradient background
- ✅ **Micro-interactions** - Fade-in animations for range display, smooth transitions

## 🎨 Design Highlights

- **Hero Section**: Landscape image with diagonal blue overlay (customizable color)
- **Calendar Grid**: 7-column layout (Mon-Sun) with proper spacing
- **Notes Panel**: Textarea with automatic localStorage persistence
- **Typography**: Clean hierarchy with proper font weights and tracking
- **Color Scheme**: Blue accent color (#1e88e5) with subtle gray tones
- **Spacing**: Pixel-perfect padding and margins throughout

## 🛠 Tech Stack

- **React 18** - UI framework
- **Next.js 14** - React framework with built-in optimizations
- **TypeScript** - Type safety
- **Tailwind CSS 3** - Utility-first styling
- **localStorage API** - Client-side data persistence

## 📁 Project Structure

```
calendar-2/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main entry point
│   └── globals.css          # Global styles
├── components/
│   ├── Calendar.tsx         # Main calendar container
│   ├── HeroSection.tsx      # Top image section with overlay
│   ├── CalendarGrid.tsx     # Calendar dates grid with selection
│   ├── NotesPanel.tsx       # Notes textarea with localStorage
│   └── SpiralBinding.tsx    # SVG spiral binding effect
├── utils/
│   ├── dateUtils.ts         # Date manipulation utilities
│   └── colorUtils.ts        # Color extraction and manipulation
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── next.config.js           # Next.js config
├── tailwind.config.ts       # Tailwind configuration
├── postcss.config.js        # PostCSS config
└── .gitignore               # Git ignore rules
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to project directory** (already in calendar-2):

```bash
cd calendar
```

2. **Install dependencies**:

```bash
npm install
```

Or with yarn:

```bash
yarn install
```

3. **Run development server**:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

4. **Open browser**:

- Navigate to `http://localhost:3000`
- Calendar will load with current month displayed

### Build for Production

```bash
npm run build
npm start
```

## 📖 Usage Guide

### Date Range Selection

1. Click any date on the calendar to set as **start date** (highlighted with blue ring)
2. Click another date to set as **end date** (highlighted with blue ring)
3. Dates between start and end show light blue background
4. Click "Clear Selection" to reset or click a new date to start over

### Notes

- Type in the notes textarea below the calendar (desktop) or at the bottom (mobile)
- Notes are **automatically saved** to localStorage per month
- Notes persist across browser sessions
- Each month has separate notes

### Navigation

- **← Prev**: Go to previous month
- **Today**: Jump to current month
- **Next →**: Go to next month
- Smooth flip animation plays during transition

### Features to Try

- Hover over dates to see the hover scale animation
- Click dates to see the range selection gradient
- Notice today's date highlighted in red
- Weekends (Sat/Sun) shown in blue tone
- Check localStorage to see notes being saved

## 🎯 Key Implementation Details

### Date Selection Logic

- First click = start date
- Second click = end date
- Third click = reset and set new start date
- Dates are stored in client state (not persisted)

### Notes Persistence

- Uses localStorage with key: `calendar_notes_YYYY_MM`
- Updates automatically on each keystroke
- Loads on component mount
- Separate notes for each month/year combination

### Responsive Behavior

- **Desktop (lg breakpoint, 1024px+)**:
  - Notes panel on left (1 column)
  - Calendar grid on right (2 columns)
  - Navigation buttons visible

- **Mobile (<1024px)**:
  - Full-width calendar grid
  - Notes section below calendar
  - Responsive button sizing

### Animations

- **Hover**: `hover:scale-110` with 200ms duration
- **Flip**: 300ms opacity/scale transition on month change
- **Fade-in**: Range display fades in with 300ms duration
- **Smooth transitions**: All hover states use transition utilities

## 🎨 Customization

### Change Accent Color

Edit `components/Calendar.tsx`:

```typescript
const [accentColor, setAccentColor] = useState("#1e88e5") // Change this color
```

### Change Hero Image

Edit `components/Calendar.tsx`:

```typescript
const defaultImage = "https://your-image-url.com/image.jpg"
```

### Modify Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  'primary-blue': '#1e88e5', // Change primary color
  'light-blue': '#e3f2fd',   // Change light background
}
```

### Adjust Spacing

Modify padding and margins in Tailwind classes within components.

## 🧪 Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Responsive design fully supported

## 📱 Mobile Optimization

- Touch-friendly date buttons (40px minimum height)
- Proper spacing for finger tap targets
- Stack layout for better readability
- Optimized font sizes for mobile
- Responsive padding and margins

## 📝 Notes on Implementation

### Why This Approach?

1. **Client-side only** - No backend needed, uses localStorage
2. **Type-safe** - Full TypeScript support prevents runtime errors
3. **Modular** - Each component has a single responsibility
4. **Accessible** - Proper ARIA labels and semantic HTML
5. **Performant** - Optimized re-renders with React hooks
6. **Responsive** - Mobile-first design approach

### Performance Considerations

- Images lazy-loaded by Next.js Image component
- Smooth animations use CSS transitions (GPU-accelerated)
- Event listeners properly cleaned up in useEffect
- Minimal re-renders with proper state management

## 🐛 Troubleshooting

### Notes not saving?

- Check browser's localStorage is enabled
- Open DevTools → Application → Local Storage
- Look for entries starting with `calendar_notes_`

### Image not loading?

- Check internet connection (uses Unsplash image URL)
- Can replace with local image path in public/ folder

### Styles not applying?

- Clear browser cache (Ctrl+Shift+Delete)
- Restart development server
- Rebuild Tailwind CSS

## 📄 License

Feel free to use this component in your projects!

## 🎉 That's It!

Your premium wall calendar is ready to use. Enjoy! ✨

For questions or issues, check the project structure above or review the component comments.
