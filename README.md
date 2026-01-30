# Login Page Perfect UI

A production-ready React login page converted from Figma design with pixel-perfect accuracy.

## Design Source

**Figma File:** [Login Page Perfect UI (Freebie)](https://www.figma.com/design/pYcKD6oYVNnHd4vEG2hhLW/Login-Page-Perfect-UI--Freebie---Community-)

This is a professional login page featuring:
- Responsive design (desktop & mobile)
- Clean, minimalist UI
- Full form validation
- Password visibility toggle
- Google sign-in integration
- Accessible components

## Features

✨ **Responsive Design**: Optimized for desktop (split-screen) and mobile (single column)
🎨 **Design System**: Extracted colors, typography, and spacing from Figma
🔒 **Form Validation**: Email/phone and password validation with error states
👁️ **Password Toggle**: Show/hide password functionality
🚀 **Modern Stack**: React 19 + Vite + Tailwind CSS v4
♿ **Accessible**: Semantic HTML and ARIA labels

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling with CSS @theme
- **React Router** - Routing

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   └── ui/
│       ├── Button.tsx       # Primary and secondary buttons
│       ├── Input.tsx        # Text input with password toggle
│       ├── Checkbox.tsx     # Checkbox with label
│       └── Logo.tsx         # UI Unicorn logo
├── pages/
│   └── LoginPage.tsx        # Main login page
├── App.tsx
├── main.tsx
└── index.css                # Tailwind and design tokens
```

## Design Tokens

Extracted from Figma:

### Colors
- **Primary Blue**: `#007AFF`
- **System Colors**: Red, Orange, Green
- **Neutral Palette**: Black-900 to Black-50, White

### Typography
- **Font**: SF Pro Display (system fonts fallback)
- **Weights**: 400 (regular), 500 (medium), 600 (semibold)

### Spacing & Layout
- **Base unit**: 8px
- **Border radius**: 8px (inputs/buttons), 24px (container)

## Components

### Button
```tsx
<Button variant="primary" fullWidth isLoading={loading}>
  Sign in
</Button>
```

### Input
```tsx
<Input
  label="Password"
  placeholder="Enter password"
  showPasswordToggle
  error={errors.password}
/>
```

### Checkbox
```tsx
<Checkbox
  label="Remember me"
  checked={rememberMe}
  onChange={(e) => setRememberMe(e.target.checked)}
/>
```

## Live Preview

Preview URL: [Live Demo](https://ta-01kg6s7s7pzfnrr7gy2xsyx3nw-5173.wo-jxt457oj9ktxb9thhekbj8w7t.w.modal.host)

## License

Design by [UI Unicorn](https://www.figma.com/@uiunicorn)
Code generated with Claude Code
