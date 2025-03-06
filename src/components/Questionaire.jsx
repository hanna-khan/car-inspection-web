import React from 'react';
import PaymentButtons from './PaypalButtons';
import { toast, ToastContainer } from "react-toastify";

const Questionaire = (props) => {
    const { form, handleChange, toggleModal, handleSubmit } = props;

      const validateForm = () => {
        if (!form.name.trim() || !form.email.trim() || !form.number.trim()) {
          toast.error("All fields are required");
          return false;
        }
      
        if (!/\S+@\S+\.\S+/.test(form.email)) {
          toast.error("Enter a valid email address");
          return false;
        }
      
        if (!/^\d+$/.test(form.number)) {
          toast.error("Phone number must be numeric");
          return false;
        }
      
        return true;
      };

      const submitForm = (e) => {
        e.preventDefault(); 
      
        if (!validateForm()) {
          return;
        }
      
        fetch(`${process.env.REACT_APP_BASE_API_URL}/submit`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
          })
          .then((res) => {
            toast.success("Message sent successfully!");
          })
          .catch((err) => {
            console.error("Error:", err);
            toast.error(`Failed to send message: ${err.message}`);
          });
      };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-[100]">
            <div className="relative bg-white p-3 rounded-lg shadow-lg max-w-xl w-full overflow-y-auto md:h-[65%] h-[80%]">
                
                {/* Close (X) Button */}
                <button 
                    onClick={toggleModal} 
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-lg font-bold"
                >
                    ✕
                </button>

                <h2 className="text-base font-semibold text-gray-800 mb-2 text-center">Request Report</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-semibold mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded-lg focus:outline-none"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-semibold mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded-lg focus:outline-none"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-semibold mb-1">Phone Number</label>
                        <input
                            type="tel"
                            name="number"
                            value={form.number}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded-lg focus:outline-none"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-semibold mb-1">VIN Number</label>
                        <input
                            type="text"
                            name="vinNumber"
                            value={form.vinNumber}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded-lg focus:outline-none"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-semibold mb-1">Package Type</label>
                        <select
                            name="packageType"
                            value={form.packageType}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded-lg focus:outline-none"
                        >
                            <option value="Basic">Basic</option>
                            <option value="Advanced">Advanced</option>
                            <option value="Premium">Premium</option>
                        </select>
                    </div>

                    <PaymentButtons amount={form.packageType === "Premium" ? 35 : form.packageType === "Advanced" ? 50 : 85} />

                    <div className="flex justify-end gap-2 mt-2">
                        <button onClick={submitForm} type="submit" className="bg-secondary text-white px-3 py-2 rounded-md hover:bg-accent text-xs">
                            Submit
                        </button>
                        <button type="button" onClick={toggleModal} className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 text-xs">
                            Close
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Questionaire;
