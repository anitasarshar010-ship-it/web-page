import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <div className="bg-white">
        {/* sidebar */}
        <section className="flex flex-col justify-between h-screen">
          {/* brand item */}
          <div className="text-black">
            <h1 className="text-3xl font-bold">Aeon</h1>
          </div>
          {/* navigational links */}
          <nav className=" text-2l text-gray-600 text-left space-y-4">
            <ul>
              <li>Overview</li>
              <li>Product</li>
              <li>Orders</li>
              <li>Checkout</li>
              <li>Setting</li>
            </ul>
          </nav>
          {/* help centre */}
          <nav className="space-y-4">
            <ul>
              <li>Help Centre</li>
              <li>Contact Us</li>
              <li>Log Out</li>
            </ul>
          </nav>
        </section>
      </div>
    </>
  );
}

export default App;
