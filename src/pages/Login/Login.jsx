import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
    return (
        <div className="">
            <Navbar></Navbar>

            <div className="flex flex-col md:flex-row justify-between my-14 w-[94%] lg:max-w-6xl mx-auto">
                <img className="w-full md:w-1/2" src="https://i.ibb.co/r48DJMB/humans-1.png" alt="" />
                <div className="w-full md:w-1/2">
                    <h2 className="mb-8 text-center text-5xl text-[#ff0000] font-bold">Please Login</h2>
                    <div className="card shrink-0 w-full lg:w-[80%] mx-auto shadow-2xl bg-[#ff4800]">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-white font-bold">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;