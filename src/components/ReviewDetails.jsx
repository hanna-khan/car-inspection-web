import { MdPerson, MdEmail, MdPhone, MdDirectionsCar, MdLocalOffer, MdAttachMoney } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const ReviewDetails = ({ form, handleSubmit }) => {
    return (
        <div className="mt-6">
            <div className="md:grid block grid-cols-2 md:space-y-0 space-y-3 gap-4 md:gap-y-6 text-gray-300">
                <div className="flex items-center space-x-2 text-center md:text-left">
                    <MdPerson className="text-blue-400 text-lg" />
                    <span className="font-semibold">Name:</span>
                    <span>{form.name}</span>
                </div>
                <div className="flex items-center space-x-2 text-center md:text-left">
                    <MdEmail className="text-blue-400 text-lg" />
                    <span className="font-semibold">Email:</span>
                    <span>{form.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-center md:text-left">
                    <MdPhone className="text-blue-400 text-lg" />
                    <span className="font-semibold">Phone:</span>
                    <span>{form.number}</span>
                </div>
                <div className="flex items-center space-x-2 text-center md:text-left">
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
                    <span className="text-green-400">${form.packageType === "Premium" ? 100 : form.packageType === "Advanced" ? 50 : 30}</span>
                </div>
            </div>

            <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all mt-6 font-semibold text-lg flex items-center justify-center md:justify-end space-x-2 w-full md:w-auto">
                <FaCheckCircle className="text-xl" />
                <span>Submit</span>
            </button>
        </div>

    );
};

export default ReviewDetails;


// bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition block m-auto my-4