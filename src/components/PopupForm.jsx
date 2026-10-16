import React from "react";

const PopupForm = ({ onClose }) => {
  return (
    // Overlay: This catches clicks on the background
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose} // Clicking here triggers the close function
    >
      {/* Form Card: Adding e.stopPropagation() prevents clicking inside the form from closing it */}
      <div
        className="bg-[#0B1D33]  rounded-3xl w-full max-w-lg shadow-2xl border border-white/10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#48525B] text-white rounded-3xl p-8 lg:p-9 shadow-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-[#FACC15] text-2xl font-bold"
          >
            &times;
          </button>
          <h3 className="text-white text-xl font-semibold mb-1 text-center">
            BOOK YOUR 3 FREE DEMO CLASSES
          </h3>

          <form action="/contact.php" method="POST" class="space-y-5">
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              class="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/30 focus:outline-none focus:border-white placeholder:text-white/60 text-white"
            />

            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              class="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/30 focus:outline-none focus:border-white placeholder:text-white/60 text-white"
            />

            <select
              name="classLevel"
              required
              class="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/30 focus:outline-none focus:border-white text-white"
            >
              <option value="" class="text-black">
                Interested In
              </option>
              <option class="text-black" value="Class 5-8">
                Class 5 - 8
              </option>
              <option class="text-black" value="Class 9-12">
                Class 9 - 12
              </option>
              <option class="text-black" value="Class 12th Pass Out">
                Class 12th Pass Out
              </option>
            </select>

            <button
              type="submit"
              class="w-full py-4 mt-3 bg-[#FACC15] hover:bg-yellow-300 text-[#0B1D33] font-bold rounded-2xl transition-all active:scale-95"
            >
              APPLY NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
