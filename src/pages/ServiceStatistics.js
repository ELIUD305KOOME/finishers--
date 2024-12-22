// ServiceStatistics.js
import React, { useEffect, useState } from 'react';

const ServiceStatistics = () => {
    const [statistics, setStatistics] = useState(null);
    const [error, setError] = useState(null);

    // Fetch service booking statistics from the backend API
    useEffect(() => {
        const fetchStatistics = async () => {
            try {
                const response = await fetch('/service-bookings'); // This will be proxied to your backend
                if (!response.ok) {
                    throw new Error('Failed to fetch statistics');
                }
                const data = await response.json();
                setStatistics(data.statistics);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchStatistics();
    }, []);

    // Display loading state or error
    if (error) {
        return <div style={{ color: 'red' }}>Error: {error}</div>;
    }

    if (!statistics) {
        return <div>Loading...</div>;
    }

    return (
        <div className="statistics">
            <h2>Service Booking Statistics</h2>
            <p><strong>Most Frequent Service:</strong> {statistics.most_frequent_service || 'N/A'}</p>
            <p><strong>Most Frequent Name:</strong> {statistics.most_frequent_name || 'N/A'}</p>
            <p><strong>Total Amount Paid:</strong> ${statistics.total_amount_paid.toFixed(2) || '0.00'}</p>
            <p><strong>Total Unique Services Booked:</strong> {statistics.total_unique_services || '0'}</p>
            
            <h3>Status Counts</h3>
            <p><strong>Pending:</strong> {statistics.status_counts.pending || '0'}</p>
            <p><strong>Completed:</strong> {statistics.status_counts.completed || '0'}</p>
            <p><strong>Cancelled:</strong> {statistics.status_counts.cancelled || '0'}</p>
        </div>
    );
};

export default ServiceStatistics;
