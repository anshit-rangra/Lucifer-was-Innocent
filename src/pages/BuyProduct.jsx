import React, { useEffect, useState } from 'react';
import {gsap} from 'gsap'
import SuccessMessageBox from '../components/ui/SuccessMessageBox';
import BuyForm from '../components/ui/BuyForm';
import CustomParticles from '../components/ui/CustomParticles';
import SmokeEffect from '../components/ui/SmokeEffect'

const BuyProduct = () => {
    const [message, setMessage] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        quantity: 1,
    });

    useEffect(() => {
        gsap.from(".main > *", {
            opacity:0,
            duration:1.4
          })
    }, [])
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    };

    return (
        <div className="main min-h-screen bg-black text-red-50 p-4 sm:p-6 md:p-8 relative overflow-hidden">
            
            <SmokeEffect />

            <div className="max-w-6xl mx-auto relative z-20">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 text-red-500 font-cinzel tracking-wide drop-shadow-[0_0_8px_rgba(239,68,68,0.6)] animate-pulse">
                    CLAIM THE FORBIDDEN TRUTH
                </h1>
                <p className="text-center text-red-300 mb-6 sm:mb-8 text-sm sm:text-base italic">
                    "The greatest trick the Devil pulled was convincing the world he didn't exist..."
                </p>

                <div className="flex flex-col-reverse lg:flex-row gap-8 items-center lg:items-start">


                    {/* Book Cover */}
                    <div className="w-full lg:w-1/2 flex justify-center order-1">
                        <div className="relative group transform transition-all duration-500 hover:scale-[1.01] max-w-[400px]">
                            <div className="absolute -inset-2 bg-red-900 rounded-lg opacity-20 blur-md group-hover:opacity-30 transition-opacity"></div>
                            <div className="relative w-full overflow-hidden rounded-lg border-2 border-red-900/50 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                                <img 
                                    src="https://i.pinimg.com/736x/e3/0e/ad/e30ead6eab8680fac71a00769110594b.jpg" 
                                    alt="Lucifer Was Innocent - Book Cover"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-gothic tracking-wider">LUCIFER WAS INNOCENT</h2>
                                    <p className="text-red-300 italic">By Tirth Parsana</p>
                                    <div className="mt-3 flex items-center justify-between">
                                        <span className="text-2xl font-bold text-red-500">₹369</span>
                                        <span className="text-sm text-gray-400 bg-black/50 px-2 py-1 rounded">143 pages</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Form */}
                    <div className="w-full lg:w-1/2 order-2">
                        <div className="bg-black/90 border-2 border-red-900/30 rounded-lg p-6 sm:p-8 shadow-[0_0_30px_rgba(185,28,28,0.3)] hover:shadow-[0_0_40px_rgba(185,28,28,0.4)] transition-all">
                            <h2 className="text-xl sm:text-2xl font-bold text-red-500 mb-6 flex items-center border-b border-red-900/50 pb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                SUMMON YOUR COPY
                            </h2>

                            <BuyForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} setFormData={setFormData} />

                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center text-xs text-red-900/80 italic">
                    <p className="mb-1">By ordering, you accept that some truths cannot be unseen</p>
                    <p className="animate-pulse">This knowledge comes with eternal consequences</p>
                </div>
            </div>

            <CustomParticles />

            {message && <SuccessMessageBox />}
        </div>
    );
};

export default BuyProduct;