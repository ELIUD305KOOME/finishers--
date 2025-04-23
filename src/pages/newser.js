import React, { useEffect, useState } from 'react';

const countries = [
  { code: 'us', name: 'USA' },
  { code: 'gb', name: 'UK' },
  { code: 'de', name: 'Germany' },
  { code: 'jp', name: 'Japan' },
  { code: 'in', name: 'India' },
  { code: 'fr', name: 'France' },
  { code: 'cn', name: 'China' },
];

const Newser = () => {
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState('us');
  const [loading, setLoading] = useState(false);

  const fetchNews = async (countryCode) => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/news?country=${countryCode}`);
      const data = await res.json();
      setNews(data.articles || []);
    } catch (err) {
      console.error('Error fetching news:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(country);
  }, [country]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🌍 Trending Tech News
      </h1>

      <div className="mb-6 text-center">
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="p-2 rounded border"
        >
          {countries.map(({ code, name }) => (
            <option key={code} value={code}>{name}</option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="text-center text-xl">Loading news...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col"
            >
              <img
                src={article.urlToImage || 'https://via.placeholder.com/400x200'}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <h2 className="font-semibold text-lg mb-2">{article.title}</h2>
                <p className="text-sm text-gray-600 mb-2 flex-1">
                  {article.description?.slice(0, 100)}...
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm mt-auto"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Newser;
