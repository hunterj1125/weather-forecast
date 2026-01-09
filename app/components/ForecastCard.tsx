'use client';

import { motion } from 'framer-motion';
import { ForecastDay } from '../types/weather';

interface ForecastCardProps {
  forecast: ForecastDay;
  index: number;
}

function getWeatherIcon(condition: string): string {
  const lower = condition.toLowerCase();
  if (lower.includes('rain')) return '';
  if (lower.includes('snow')) return '';
  if (lower.includes('cloud')) return '';
  if (lower.includes('sunny')) return '';
  if (lower.includes('partly')) return '';
  return '';
}

function getDayName(dateString: string): string {
  const date = new Date(dateString);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}

function getConditionGradient(condition: string): string {
  const lower = condition.toLowerCase();
  if (lower.includes('rain')) return 'from-gray-600 to-blue-600';
  if (lower.includes('snow')) return 'from-blue-200 to-cyan-300';
  if (lower.includes('cloud')) return 'from-gray-400 to-gray-500';
  if (lower.includes('sunny')) return 'from-yellow-400 to-orange-500';
  return 'from-blue-400 to-indigo-500';
}

export default function ForecastCard({ forecast, index }: ForecastCardProps) {
  const gradient = getConditionGradient(forecast.condition);
  const icon = getWeatherIcon(forecast.condition);
  const day = getDayName(forecast.date);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.05,
        y: -8,
        transition: { duration: 0.2 },
      }}
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} rounded-2xl p-6 shadow-lg cursor-pointer`}
    >
      {/* Floating background circles */}
      <motion.div
        className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Day name */}
      <motion.p
        className="text-white/90 font-semibold text-lg mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.2 }}
      >
        {day}
      </motion.p>

      {/* Animated weather icon */}
      <motion.div
        className="text-6xl mb-4 text-center"
        animate={{
          y: [-3, 3, -3],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 3 + index * 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {icon}
      </motion.div>

      {/* Condition */}
      <motion.p
        className="text-white font-medium text-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
      >
        {forecast.condition}
      </motion.p>

      {/* Temperature */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <motion.span
          className="text-4xl font-bold text-white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: index * 0.1 + 0.4 }}
        >
          {Math.round(forecast.temp)}
        </motion.span>
      </div>

      {/* High/Low temperatures */}
      <div className="flex items-center justify-center gap-3 text-white/80 text-sm">
        <motion.div
          className="flex items-center gap-1"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          <span></span>
          <span>{Math.round(forecast.tempMax)}</span>
        </motion.div>
        <motion.div
          className="flex items-center gap-1"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          <span></span>
          <span>{Math.round(forecast.tempMin)}</span>
        </motion.div>
      </div>

      {/* Humidity indicator */}
      <motion.div
        className="mt-4 flex items-center justify-center gap-2 text-white/70 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.6 }}
        whileHover={{ scale: 1.1 }}
      >
        <span></span>
        <span>{forecast.humidity}%</span>
      </motion.div>

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: '200%' }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3 + index * 0.5,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
}
