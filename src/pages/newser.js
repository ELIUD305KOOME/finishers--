import React, { useEffect, useRef, useState } from 'react';

const Newser = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const iframeRefs = useRef([]);

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

  // Optional: Lazy load YouTube iframes when in view (for performance)
  useEffect(() => {
    const observers = [];

    iframeRefs.current.forEach((iframe) => {
      if (!iframe) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && iframe.dataset.src) {
            iframe.src = iframe.dataset.src; // Lazy-load YouTube video
            iframe.removeAttribute('data-src');
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(iframe);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [news]);

  const isYouTubeUrl = (url) => url?.includes('youtube.com') || url?.includes('youtu.be');

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-xl font-bold mb-6 text-center">🎥 Trending Tech News</h1>

      {loading ? (
        <p className="text-center text-xl">Loading news...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col"
            >
              {isYouTubeUrl(article.videoUrl) ? (
                <iframe
                  ref={(el) => (iframeRefs.current[idx] = el)}
                  data-src={convertToEmbedUrl(article.videoUrl)}
                  className="w-full h-48"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`YouTube video for ${article.title}`}
                />
              ) : (
                <video
                  ref={(el) => (iframeRefs.current[idx] = el)}
                  src={article.videoUrl || 'https://www.w3schools.com/html/mov_bbb.mp4'}
                  className="w-full h-48 object-cover"
                  muted
                  controls
                  playsInline
                />
              )}
              <div className="p-4 flex flex-col flex-1">
                <h2 className="font-semibold text-xs mb-2">{article.title}</h2>
                {/* <p className="text-xs text-gray-600 mb-2 flex-1">
                  {article.description?.slice(0, 100)}...
                </p> */}
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm mt-auto"
                >
                  Watch full story
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Convert YouTube URLs to embeddable format
const convertToEmbedUrl = (url) => {
  if (url.includes('youtu.be')) {
    const id = url.split('/').pop();
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1`;
  }
  if (url.includes('youtube.com/watch')) {
    const id = new URL(url).searchParams.get('v');
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1`;
  }
  return url;
};

export default Newser;
