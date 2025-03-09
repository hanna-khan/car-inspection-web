import { MdPerson, MdEmail, MdPhone, MdDirectionsCar, MdLocalOffer, MdAttachMoney } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const ReviewDetails = ({ form, handleSubmit }) => {
    return (
        <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
            {/* <h3 className="text-xl font-semibold text-blue-400 text-center mb-4 flex items-center justify-center">
                <MdPerson className="mr-2 text-2xl" /> Review Your Details
            </h3> */}

            <div className="grid grid-cols-2 gap-4 text-gray-300">
                <div className="flex items-center space-x-2">
                    <MdPerson className="text-blue-400 text-lg" />
                    <span className="font-semibold">Name:</span>
                    <span>{form.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <MdEmail className="text-blue-400 text-lg" />
                    <span className="font-semibold">Email:</span>
                    <span>{form.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <MdPhone className="text-blue-400 text-lg" />
                    <span className="font-semibold">Phone:</span>
                    <span>{form.number}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <MdDirectionsCar className="text-blue-400 text-lg" />
                    <span className="font-semibold">VIN Number:</span>
                    <span>{form.vinNumber}</span>
                </div>
                <div className="col-span-2 flex items-center space-x-2">
                    <MdLocalOffer className="text-blue-400 text-lg" />
                    <span className="font-semibold">Package:</span>
                    <span className="text-yellow-400">{form.packageType}</span>
                </div>
                <div className="col-span-2 flex items-center space-x-2">
                    <MdAttachMoney className="text-blue-400 text-lg" />
                    <span className="font-semibold">Total Amount Paid:</span>
                    <span className="text-green-400">${form.packageType === "Premium" ? 85 : form.packageType === "Advanced" ? 50 : 35}</span>
                </div>

            </div>

            <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all mt-6 font-semibold text-lg flex items-center justify-end space-x-2  m-auto ">
                <FaCheckCircle className="text-xl" />
                <span>Submit</span>
            </button>
        </div>
    );
};

export default ReviewDetails;


// bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition block m-auto my-4