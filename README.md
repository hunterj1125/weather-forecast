# Weather Forecast App

A beautiful weather dashboard built with Next.js 16, TypeScript, and Tailwind CSS v4.

## Features

- **Current Weather Display**: Large, easy-to-read temperature and conditions
- **7-Day Forecast**: Comprehensive week-ahead weather predictions
- **Glassmorphism Design**: Modern, frosted-glass UI elements
- **Animated Backgrounds**: Dynamic gradient backgrounds with floating elements
- **Responsive Layout**: Works seamlessly on all device sizes
- **Large Typography**: Enhanced readability with 7xl+ font sizes

## Tech Stack

- **Next.js 16.1.1** with Turbopack for fast development
- **TypeScript** for type safety
- **Tailwind CSS v4** with @tailwindcss/postcss
- **React 19** for UI components

## Getting Started

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3004](http://localhost:3004) in your browser.

## Project Structure

```
weather-forecast/
├── app/
│   ├── components/
│   │   ├── WeatherCard.tsx       # Current weather display
│   │   ├── ForecastCard.tsx      # Individual forecast day card
│   │   └── SearchBar.tsx         # City search component
│   ├── types/
│   │   └── weather.ts            # TypeScript interfaces
│   ├── globals.css               # Tailwind imports
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main page with mock data
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript config
├── tailwind.config.ts            # Tailwind configuration
├── postcss.config.mjs            # PostCSS with Tailwind plugin
└── next.config.ts                # Next.js configuration
```

## Future Enhancements

- Integration with OpenWeather API for real-time data
- Location-based automatic weather detection
- Hourly forecast view
- Weather alerts and notifications
- Dark mode support
- Temperature unit toggle (Celsius/Fahrenheit)
