"use client";
import { useState } from "react";
import { Image } from "@heroui/react";
import MailIcon from "@mui/icons-material/Mail"; // Mail Icon
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Success Icon
import ErrorIcon from "@mui/icons-material/Error"; // Error Icon

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errorPopup, setErrorPopup] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setErrorPopup(true);
      return;
    }
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSuccessPopup(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>
      {/* Header with centered Mail Icon */}
      <header className="flex items-center justify-center p-4 mt-8">
  <div className="flex items-center space-x-2">
    <div className="bg-[#1c1c1c] rounded-full p-3">
      <MailIcon sx={{ fontSize: 36 }} className="text-white" />
    </div>
  </div>
</header>


      <div
        className={`bg-black my-8 md:my-16 flex items-center justify-center px-4 relative ${
          errorPopup || successPopup ? "overflow-hidden" : ""
        }`}
      >
        {(errorPopup || successPopup) && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40"></div>
        )}

        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-center gap-8 mx-auto relative z-10">
          <div className={`w-full flex justify-center ${errorPopup || successPopup ? "hidden" : ""}`}>
            <Image
              alt="HeroUI Fruit Image"
              src="https://heroui.com/images/fruit-1.jpeg"
              width={300}
              height={400}
              className="mx-auto w-full md:w-[300px] h-auto rounded-2xl"
            />
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-5 text-white">
            <div>
              <label className="mb-1 block">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-2xl bg-[#2C2C2C] px-3 py-2 placeholder-gray-400 focus:outline-none"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div>
              <label className="mb-1 block">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl bg-[#2C2C2C] px-3 py-2 placeholder-gray-400 focus:outline-none"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div>
              <label className="mb-1 block">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Enter your message"
                className="w-full rounded-2xl bg-[#2C2C2C]  px-3 py-2 placeholder-gray-400 focus:outline-none h-24"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center w-min px-4 py-2 rounded-full transition-transform duration-200 hover:scale-110 mx-auto"
              style={{ backgroundColor: "#2C2C2C" }}
            >
              <span className="transition-colors duration-200 text-white">Submit</span>
            </button>
          </form>
        </div>

        {errorPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-[#2C0B0E] text-white p-6 rounded-lg relative w-80 shadow-lg">
              <button
                onClick={() => setErrorPopup(false)}
                className="absolute top-2 right-2 text-red-800 hover:text-red-600"
              >
                <div className="text-white mr-2"> X </div>
              </button>
              <div className="flex items-center space-x-2">
                <ErrorIcon style={{ color: "#FF4C4C" }} />
                <h2 className="text-lg font-lightbold text-[#FF4C4C]">Please fill all fields</h2>
              </div>
              <p className="mt-2">All three fields are required before submission.</p>
            </div>
          </div>
        )}

        {successPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-[#0F2910] text-white p-6 rounded-lg relative w-80 shadow-lg">
              <button
                onClick={() => setSuccessPopup(false)}
                className="absolute top-2 right-2 text-green-400 hover:text-green-600"
              >
                <div className="text-white mr-2"> X </div>
              </button>
              <div className="flex items-center space-x-2">
                <CheckCircleIcon style={{ color: "#4CAF50" }} />
                <h2 className="text-lg font-lightbold text-[#4CAF50]">Thank You!</h2>
              </div>
              <p className="mt-2">Your message has been delivered successfully.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
