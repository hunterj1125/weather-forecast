import { WeatherData } from '../types/weather';

interface WeatherCardProps {
  weather: WeatherData;
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-4 border-white/40">
      <div className="text-center mb-6">
        <h2 className="text-5xl font-bold text-gray-800 mb-2">
          {weather.city}, {weather.country}
        </h2>
        <p className="text-2xl text-gray-600 capitalize">{weather.description}</p>
      </div>

      <div className="flex items-center justify-center mb-8">
        <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-600">
          {Math.round(weather.temperature)}°
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
          <p className="text-sm font-medium text-gray-600 mb-1">Feels Like</p>
          <p className="text-3xl font-bold text-blue-700">{Math.round(weather.feelsLike)}°</p>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl">
          <p className="text-sm font-medium text-gray-600 mb-1">Humidity</p>
          <p className="text-3xl font-bold text-cyan-700">{weather.humidity}%</p>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl">
          <p className="text-sm font-medium text-gray-600 mb-1">Wind</p>
          <p className="text-3xl font-bold text-indigo-700">{Math.round(weather.windSpeed)} mph</p>
        </div>
      </div>
    </div>
  );
}
