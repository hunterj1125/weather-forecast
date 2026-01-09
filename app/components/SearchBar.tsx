interface SearchBarProps {
  onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const city = formData.get('city') as string;
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          name="city"
          placeholder="Search for a city..."
          className="w-full px-8 py-6 text-2xl rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border-4 border-white/40 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-200 transition-all"
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xl font-semibold rounded-xl transition-all hover:scale-105 shadow-lg"
        >
          Search
        </button>
      </div>
    </form>
  );
}
