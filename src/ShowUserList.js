import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowUserList = () => {
const [user, setUser] = useState(null);
const { userId } = useParams();

useEffect(() => {
    // Fetch user data based on the userId from the URL
    const fetchData = async () => {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`); // Replace with your API endpoint
        const data = await response.json();
        setUser(data);
    } catch (error) {
        console.error('Error fetching user:', error);
    }
    };

    fetchData();
}, [userId]);

return (
    <div>
        <h2>User Details</h2>
        {user ? (
            <div>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                {/* Add other user details as needed */}
        </div>
        ) : (
            <p>Loading user details...</p>
        )}
    </div>
    );
};

export default ShowUserList;