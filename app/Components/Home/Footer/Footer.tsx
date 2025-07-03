import React from 'react';


const Footer = () => {
    return (
        <footer className="bg-gray-50 pt-12 pb-4 border-t border-gray-100 px-[5%]">
            <div className=" mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 pb-10">
                  
                    <div className="flex-1 mb-8 md:mb-0">
                        <h2 className="font-bold text-lg mb-2">Your Platform</h2>
                        <p className="text-gray-500">Automate Your Social Media, Amplify Your Voice.</p>
                    </div>
                  
                    <div className="flex-1 mb-8 md:mb-0">
                        <h2 className="font-bold text-lg mb-2">Quick Links</h2>
                        <ul className="space-y-2 text-gray-700">
                            <li><a href="#features" className="hover:text-purple-600 transition">Features</a></li>
                            <li><a href="#how-it-works" className="hover:text-purple-600 transition">How It Works</a></li>
                            <li><a href="#integration" className="hover:text-purple-600 transition">Integration</a></li>
                            <li><a href="#pricing" className="hover:text-purple-600 transition">Pricing</a></li>
                        </ul>
                    </div>
                  
                    <div className="flex-1">
                        <h2 className="font-bold text-lg mb-2">Legal & Support</h2>
                        <ul className="space-y-2 text-gray-700">
                            <li><a href="#privacy" className="hover:text-purple-600 transition">Privacy Policy</a></li>
                            <li><a href="#terms" className="hover:text-purple-600 transition">Term Of Service</a></li>
                            <li><a href="#support" className="hover:text-purple-600 transition">Support</a></li>
                        </ul>
                    </div>
                </div>
                <hr className="my-4 border-gray-200" />
                <p className="text-center text-gray-400 text-sm mt-6">
                    © Copyright 2025, All Rights Reserved by Social Media Automation (SMA)
                </p>
            </div>
        </footer>
    );
};

export default Footer;