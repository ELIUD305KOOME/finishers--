import { useState } from "react";

export default function MpesaDonation() {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    if (!phone || !amount) {
      return alert("Please fill in both phone number and amount.");
    }

    setLoading(true);
    try {
      const res = await fetch("/api/mpesa/stkpush", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, amount }),
      });
      const data = await res.json();
      if (data.success) {
        alert("STK Push sent! Enter your M-Pesa PIN to complete the donation.");
      } else {
        alert("Failed to send STK Push. Try again.");
      }
    } catch (err) {
      alert("Something went wrong. Please try later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded mt-10">
      <h2 className="text-2xl font-bold text-center text-green-700">Donate via M-Pesa</h2>
      <input
        type="text"
        placeholder="Your M-Pesa Phone Number"
        className="w-full p-3 border rounded mt-4"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="number"
        placeholder="Donation Amount"
        className="w-full p-3 border rounded mt-4"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        className="w-full mt-6 bg-green-600 text-white p-3 rounded font-semibold"
        onClick={handleDonate}
        disabled={loading}
      >
        {loading ? "Processing..." : "Donate Now"}
      </button>
    </div>
  );
}
