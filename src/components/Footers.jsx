import React from 'react';
import "../index.css";

function Footers() {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <div className="container mx-auto flex justify-between">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">Ecom</h1>
                    <p className="text-sm">Your one stop shop</p>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-xl font-bold">Contact Us</h1>
                    <p className="text-sm">Email: contact@ecom.com</p>
                </div>
            </div>
        </footer>
    );
}

export default Footers;
