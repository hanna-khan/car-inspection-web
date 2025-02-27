import React from 'react';
import PaypalButtons from "./PaypalButtons";

const Questionaire = (props) => {
    const { form, handleChange, toggleModal, handleSubmit } = props;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-[100]">
            <div className="bg-white p-3 rounded-lg shadow-lg max-w-xs w-full">
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
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded-lg focus:outline-none"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-semibold mb-1">VIM Number</label>
                        <input
                            type="text"
                            name="vimNumber"
                            value={form.vimNumber}
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
                    <PaypalButtons />
                    <div className="flex justify-end gap-2 mt-2">
                        <button type="submit" className="bg-secondary text-white px-2 py-1 rounded-md hover:bg-accent text-xs">
                            Submit
                        </button>
                        <button type="button" onClick={toggleModal} className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 text-xs">
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Questionaire;
