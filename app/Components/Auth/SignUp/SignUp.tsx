import signUpImg from "../../../banner-imgs/Auth/cuate.png"

const SignUp = () => {
    return (
        <div>
            <div className="flex justify-center items-center gap-10 h-screen ">
                <div className="flex flex-col justify-start items-start gap-4 p-4">
                    <div>
                        <h1 className="text-2xl">SocialHub</h1>
                        <p>Welcome to SocialHub! Let’s quickly set up your account and start automating your socials.</p>
                    </div>
                    <div>
                        <img src={signUpImg} alt="" />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 ">
                    <div className="flex justify-around items-center gap-5 p-4">
                        <button className="p-3 border border-gray-200 rounded-xl">Login with Google</button>
                        <button className="p-3 border border-gray-200 rounded-xl">Login with Facebook</button>
                    </div>
                    <div>
                        <p className="font-semibold">- or -</p>
                    </div>

                    <form className="space-y-2" action="">
                        <div>
                            <input placeholder="Enter Your Name" className="border-b-2 border-gray-200 w-md px-3 py-3 " type="text" />
                        </div>
                        <div>
                            <input placeholder="Enter Your Email" className="border-b-2 border-gray-200 w-md px-3 py-3 " type="text" />
                        </div>
                        <div>
                            <input placeholder="Enter Password" className="border-b-2 border-gray-200 w-md px-3 py-3 " type="text" />
                        </div>

                        <button className="text-center w-full px-3 py-3 bg-purple-600 text-white rounded-lg mt-10">
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;