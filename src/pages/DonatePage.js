import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaDonate,
  FaSmile,
  FaMobileAlt,
  FaBitcoin,
  FaUniversity,
} from "react-icons/fa";

export default function DonatePage() {
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");

  return (
    <PayPalScriptProvider options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}>
      <div className="min-h-screen bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center px-4 py-12 relative text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl w-full backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide flex items-center justify-center gap-3">
              <FaHeart className="text-red-400 animate-pulse" />
              Support Our Cause
            </h1>
            <p className="mt-4 text-lg font-light max-w-2xl mx-auto text-gray-200">
              Every contribution fuels our mission. Choose a preset amount or enter your own to make a difference today.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 justify-center text-pink-300">
              <FaDonate className="text-yellow-400" /> Select Amount
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[5, 10, 50, 100, 200, 500].map((value) => (
                <button
                  key={value}
                  onClick={() => setAmount(value)}
                  className={`py-3 rounded-xl font-semibold border-2 transition-all duration-300 ${
                    amount === value
                      ? "bg-pink-600 border-pink-400 text-white shadow-lg"
                      : "bg-white/20 border-white/30 text-white hover:bg-white/30"
                  }`}
                >
                  ${value}
                </button>
              ))}
            </div>

            <input
              type="number"
              placeholder="Custom amount (e.g. 75)"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="w-full mt-6 p-3 rounded-xl bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div className="mb-10">
            <PayPalButtons
              style={{ layout: "vertical", color: "gold", shape: "rect", label: "donate" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: customAmount || amount,
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  alert(`Thank you, ${details.payer.name.given_name}, for your generous donation!`);
                });
              }}
              onError={(err) => {
                console.error("Donation Error:", err);
                alert("There was an error processing your donation. Please try again.");
              }}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert("Transaction Initiated")}
            className="w-full py-3 bg-green-500 text-white font-semibold rounded-xl shadow-md hover:bg-green-600 transition-all text-lg"
          >
            Complete Transaction
          </motion.button>

          <div className="mt-10 pt-6 border-t border-white/30">
            <h3 className="text-lg font-bold text-pink-200 mb-4 text-center">
              Prefer Other Donation Methods?
            </h3>
            <div className="space-y-3 text-sm text-gray-200">
              <div className="flex items-center gap-3">
                <FaMobileAlt className="text-green-400" />
                <span>M-Pesa / Airtel Money: +254 792 182 559</span>
              </div>
              <div className="flex items-center gap-3">
                <FaUniversity className="text-blue-300" />
                <span>Bank Transfer: ABC Bank, Account No. 123456789</span>
              </div>
              <div className="flex items-center gap-3">
                <FaBitcoin className="text-yellow-300" />
                <span>Crypto: BTC Wallet – 1A2b3C4d5E6f7G8h9I</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 text-sm text-gray-400">
            <FaSmile className="inline text-yellow-400 mr-1" />
            We truly appreciate your kindness!
          </div>
        </motion.div>
      </div>
    </PayPalScriptProvider>
  );
}
