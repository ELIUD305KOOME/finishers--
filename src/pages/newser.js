import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent } from "@/components/ui/card";

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
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines`,
        {
          params: {
            category: 'technology',
            country: countryCode,
            apiKey: 'fda9cd8ff5e0471a8ea88f897f352b7f', // Replace with your actual API key
          },
        }
      );
      setNews(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(country);
  }, [country]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🌍 Trending Tech News by Country</h1>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {countries.map((c) => (
          <button
            key={c.code}
            className={`px-4 py-2 rounded-lg text-white transition ${
              country === c.code ? 'bg-blue-600' : 'bg-blue-400 hover:bg-blue-500'
            }`}
            onClick={() => setCountry(c.code)}
          >
            {c.name}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-center text-xl">Loading news...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl overflow-hidden">
              <img
                src={article.urlToImage || 'https://via.placeholder.com/400x200'}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h2 className="font-semibold text-lg mb-2">{article.title}</h2>
                <p className="text-sm text-gray-600 mb-2">
                  {article.description?.slice(0, 100)}...
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Read more
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Newser;
