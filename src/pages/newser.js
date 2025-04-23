import React, { useEffect, useState } from 'react';

const Newser = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/news`);
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-sm font-bold mb-6 text-center">
        🌍 Trending Tech News
      </h1>

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
