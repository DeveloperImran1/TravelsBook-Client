import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
    return (
        <>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-black mb-3  lg:mt-[50px]">Contact Us</h1>
            <div className="flex flex-col items-center justify-center" >
                <p className="text-center text-black w-[90%] lg:w-[75%] mb-6 " >Questions or feedback? Were here to help! Contact our friendly team for assistance with bookings, inquiries, or support. Reach us via phone, email, or through our online form.</p>

            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-6 items-start" >
                <div className="flex flex-col gap-4  " >
                    <div className="border/10 mx-auto  w-full rounded-2xl bg-white p-5 shadow-lg dark:bg-[#18181B] md:p-8 border ">
                        <div className="flex flex-col items-center justify-center space-y-5">
                            <FaMapMarkerAlt size={70} className="border-[1px] border-[#FF5400] border-dotted rounded-full p-2 text-[#FF5400] " />
                            <h6 className="text-center font-semibold text-slate-700 text-2xl dark:text-white/80">Our Address</h6>
                            <h6 className="text-center font-medium text-[#5A5A5D] dark:text-white/80">Panchbibi, Joypurhat</h6>

                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between gap-3 items-center " >
                        <div className="border/10 mx-auto w-full lg:w-[300px] rounded-2xl bg-white p-5 shadow-lg dark:bg-[#18181B] md:p-8 border">
                            <div className="flex flex-col items-center justify-center space-y-5">
                                <MdEmail size={70} className="border-[1px] border-[#FF5400] border-dotted rounded-full p-2 text-[#FF5400] " />
                                <h6 className="text-center font-semibold text-slate-700 text-2xl dark:text-white/80">Email Us</h6>
                                <h6 className="text-center font-medium text-[#5A5A5D] dark:text-white/80">ih9066588@gmail.com</h6>
                                <h6 className="text-center font-normal text-xs text-[#5A5A5D] dark:text-white/80">abdulquddus01925251187@gmail.com</h6>
                            </div>
                        </div>
                        <div className="border/10 mx-auto w-full lg:w-[300px] rounded-2xl bg-white p-5 shadow-lg dark:bg-[#18181B] md:p-8 border">
                            <div className="flex flex-col items-center justify-center space-y-5">
                                <IoCall size={70} className="border-[1px] border-[#FF5400] border-dotted rounded-full p-2 text-[#FF5400] " />
                                <h6 className="text-center font-semibold text-slate-700 text-2xl dark:text-white/80">Call Us</h6>
                                <h6 className="text-center font-medium text-[#5A5A5D] dark:text-white/80">+8801311710894</h6>
                                <h6 className="text-center font-medium text-[#5A5A5D] dark:text-white/80">+8801989187382</h6>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="w-full lg:w-[47%]" >
                    <form noValidate="" className="flex flex-col px-6 py-8  space-y-6  w-full border-2 border-[#5A5A5D] rounded-[16px] ">
                        <div className="flex justify-between items-center" >
                            <label className="block">
                                <span className="mb-1">Full name</span>
                                <input type="text" placeholder="Your name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 border border-[#5A5A5D] p-2 focus:dark:ring-violet-600 dark:bg-gray-100" />
                            </label>
                            <label className="block">
                                <span className="mb-1">Email</span>
                                <input type="text" placeholder="Your Email" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 border border-[#5A5A5D] p-2 focus:dark:ring-violet-600 dark:bg-gray-100" />
                            </label>
                        </div>
                        <label className="block">
                            <span className="mb-1">Full name</span>
                            <input type="text" placeholder="Your name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 border border-[#5A5A5D] p-2 focus:dark:ring-violet-600 dark:bg-gray-100" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Message</span>
                            <textarea type="text" placeholder="Text Area" className=" h-[160px] block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 border border-[#5A5A5D] p-2 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
                        </label>
                        <button type="button" className="border border-[#5A5A5D]   self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600">Submit</button>
                    </form>
                </div>
            </div>
        </>

    );
};

export default ContactUs;


