'use client';

import { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import SearchBar from './components/SearchBar';
import { WeatherData, ForecastDay } from './types/weather';

export default function WeatherPage() {
  // Mock data for demonstration
  const [currentWeather] = useState<WeatherData>({
    city: 'New York',
    country: 'US',
    temperature: 72,
    feelsLike: 68,
    condition: 'Partly Cloudy',
    description: 'partly cloudy',
    humidity: 65,
    windSpeed: 12,
    pressure: 1013,
    icon: '02d',
  });

  const [forecast] = useState<ForecastDay[]>([
    { date: new Date(Date.now() + 86400000).toISOString(), temp: 75, tempMin: 65, tempMax: 78, condition: 'Sunny', icon: '01d', humidity: 60 },
    { date: new Date(Date.now() + 172800000).toISOString(), temp: 70, tempMin: 62, tempMax: 73, condition: 'Cloudy', icon: '03d', humidity: 70 },
    { date: new Date(Date.now() + 259200000).toISOString(), temp: 68, tempMin: 60, tempMax: 71, condition: 'Rainy', icon: '10d', humidity: 85 },
    { date: new Date(Date.now() + 345600000).toISOString(), temp: 73, tempMin: 64, tempMax: 76, condition: 'Sunny', icon: '01d', humidity: 55 },
    { date: new Date(Date.now() + 432000000).toISOString(), temp: 77, tempMin: 68, tempMax: 80, condition: 'Sunny', icon: '01d', humidity: 50 },
    { date: new Date(Date.now() + 518400000).toISOString(), temp: 74, tempMin: 66, tempMax: 78, condition: 'Cloudy', icon: '03d', humidity: 65 },
    { date: new Date(Date.now() + 604800000).toISOString(), temp: 71, tempMin: 63, tempMax: 75, condition: 'Partly Cloudy', icon: '02d', humidity: 62 },
  ]);

  const handleSearch = (city: string) => {
    console.log('Searching for:', city);
    // API integration will go here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-7xl font-bold text-white text-center mb-4 drop-shadow-lg">
          Weather Forecast
        </h1>
        <p className="text-2xl text-white/90 text-center mb-12 drop-shadow-md">
          Real-time weather information at your fingertips
        </p>

        <SearchBar onSearch={handleSearch} />

        <div className="max-w-4xl mx-auto mb-12">
          <WeatherCard weather={currentWeather} />
        </div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
            7-Day Forecast
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6">
            {forecast.map((day, index) => (
              <ForecastCard key={index} forecast={day} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

