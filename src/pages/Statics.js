// // src/StatisticsDashboard.js

// import React, { useEffect, useState } from 'react';

// const StatisticsDashboard = () => {
//     const [statistics, setStatistics] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Fetch only statistics from the API (no need for booking list)
//         fetch('/product/bookings')  // Proxy handles redirect to the backend API
//             .then((response) => response.json())
//             .then((data) => {
//                 setStatistics(data.statistics);  // We only care about the statistics
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 setError('Failed to fetch data');
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     return (
//         <div className="container">
//             <h1>Product Booking Statistics</h1>

//             <div id="statistics">
//                 <p><strong>Most Frequent Product:</strong> {statistics.most_frequent_product || 'N/A'}</p>
//                 <p><strong>Most Frequent Name:</strong> {statistics.most_frequent_name || 'N/A'}</p>
//                 <p><strong>Total Amount Paid:</strong> ${statistics.total_amount_paid.toFixed(2)}</p>
//                 <p><strong>Status Counts:</strong></p>
//                 <ul>
//                     <li>Pending: {statistics.status_counts.pending}</li>
//                     <li>Completed: {statistics.status_counts.completed}</li>
//                     <li>Cancelled: {statistics.status_counts.cancelled}</li>
//                 </ul>
//                 <p><strong>Total Unique Products:</strong> {statistics.total_unique_products}</p>
//             </div>
//         </div>
//     );
// };

// export default StatisticsDashboard;
