import React, { useEffect, useState } from 'react';
import { account } from '../Appwrite/config';
import { useNavigate, Link } from 'react-router-dom';

function Account({ orders }) {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const getData = account.get();
        getData.then(
            function(response) {
                setUserDetails(response);
            },
            function(error) {
                console.log(error);
            }
        );
    }, []);

    const handleLogout = async () => {
        try {
            await account.deleteSession('current');
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {userDetails ? (
                <div className="min-h-min max-w-7xl mx-auto shadow-md flex justify-between text-right py-3 px-3 mt-2 rounded-md">
                    <div>
                        <p className="text-xl">Hello {userDetails.name}</p>
                    </div>
                    <div>
                        <button
                            className="bg-red-400 text-white p-1 rounded-md"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            ) : (
                <p className="mt-4">
                    Please Login To see Profile{" "}
                    <Link to="/Login">
                        <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
                            Login
                        </span>
                    </Link>
                </p>
            )}
            {orders.length > 0 ? (
                <div className="mt-4">
                    <h2 className="text-2xl">Your Orders</h2>
                    <ul>
                        {orders.map((order, index) => (
                            <li key={index} className="p-2 border-b border-gray-200">
                                <p>Product: {order.name}</p>
                                <p>Price: ${order.price}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p className="mt-4">No orders found.</p>
            )}
        </>
    );
}

export default Account;
