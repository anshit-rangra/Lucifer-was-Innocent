import React from "react";

const BuyForm = ({formData, handleChange, handleSubmit, setFormData}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="block text-sm text-red-300 font-medium tracking-wider">
            FULL NAME*
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/70 border border-red-900/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all placeholder-red-900/70"
            placeholder="Enter your name..."
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm text-red-300 font-medium tracking-wider">
            EMAIL*
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/70 border border-red-900/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all placeholder-red-900/70"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="block text-sm text-red-300 font-medium tracking-wider">
          PHONE*
        </label>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-black/70 border border-red-900/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all placeholder-red-900/70"
          placeholder="+91 XXXXX XXXXX"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm text-red-300 font-medium tracking-wider">
          SHIPPING ADDRESS*
        </label>
        <textarea
          name="address"
          required
          value={formData.address}
          onChange={handleChange}
          rows="3"
          className="w-full px-4 py-3 bg-black/70 border border-red-900/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all resize-none placeholder-red-900/70"
          placeholder="Where shall we deliver the truth?"
        ></textarea>
      </div>

      <div className="flex items-center justify-between pt-2">
        <div className="space-y-1">
          <label className="block text-sm text-red-300 font-medium tracking-wider">
            QUANTITY
          </label>
          <div className="flex items-center">
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  quantity: Math.max(1, prev.quantity - 1),
                }))
              }
              className="px-4 py-2 bg-red-900/80 hover:bg-red-800 border border-red-900 rounded-l-lg transition"
            >
              -
            </button>
            <input
              type="number"
              name="quantity"
              min="1"
              value={formData.quantity}
              onChange={handleChange}
              className="no-arrows w-16 px-2 py-2 text-center bg-black/70 border-t border-b border-red-900 focus:outline-none"
            />
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  quantity: prev.quantity + 1,
                }))
              }
              className="px-4 py-2 bg-red-900/80 hover:bg-red-800 border border-red-900 rounded-r-lg transition"
            >
              +
            </button>
          </div>
        </div>

        <div className="text-right">
          <p className="text-sm text-red-300 font-medium tracking-wider">
            TOTAL
          </p>
          <p className="text-3xl font-bold text-red-500">
            ₹{369 * formData.quantity}
          </p>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-gradient-to-b from-red-900 to-black hover:from-red-800 hover:to-black border-2 border-red-900/50 rounded-lg font-bold text-white tracking-wider uppercase transition-all transform hover:scale-[1.01] shadow-lg hover:shadow-red-900/50 active:scale-95 mt-6"
      >
        COMMIT TO TRUTH
      </button>
    </form>
  );
};

export default BuyForm;
