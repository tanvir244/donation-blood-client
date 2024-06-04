import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";

// react hook form
import { useForm } from "react-hook-form"

const SignUp = () => {
    // showing Districts
    const [allDivision, setAllDivision] = useState([]);
    const [selectedDivision, setSelectedDivision] = useState("Dhaka");
    const [allDistricts, setAllDistricts] = useState([]);
    // showing Upazilas
    const [allUpazilas, setAllUpazilas] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState([]);
    const [expectedUpazilas, setExpectedUpazilas] = useState([]);

    // showing Districts based on Division
    useEffect(() => {
        fetch('DivisionToDistrict.json')
            .then(res => res.json())
            .then(data => {
                setAllDivision(data[0].divisions);
            });
    }, []);

    useEffect(() => {
        const selectedDivisionObj = allDivision.find(div => div.name === selectedDivision);
        if (selectedDivisionObj) {
            setAllDistricts(selectedDivisionObj.districts);
        }
    }, [selectedDivision, allDivision]);


    const handleDivisionChange = (event) => {
        setSelectedDivision(event.target.value);
    };

    // showing Upazilas based on dristic
    useEffect(() => {
        fetch('DistrictsToUpazila.json')
            .then(res => res.json())
            .then(data => setAllUpazilas(data))
    }, [])

    const handleDistrictChange = (event) => {
        setSelectedDistrict(event.target.value);
    };

    useEffect(() => {
        const selectedDistrictsObj = allUpazilas.find(upazila => upazila.district === selectedDistrict);
        if (selectedDistrictsObj) {
            setExpectedUpazilas(selectedDistrictsObj.upazilas);
        }

    }, [allUpazilas, selectedDistrict])


    // sign up form 
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };

    console.log(expectedUpazilas);

    // const handleSignUp = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const division = form.division.value;
    //     const district = form.district.value;
    //     const upazila = form.upazila.value;
    //     const blood = form.blood.value;
    //     const password = form.password.value;
    //     const profile = form.profile.value;
    //     const confirm_password = form.confirm_password.value;

    //     console.log(name, email, division, district, upazila, blood, password, confirm_password, profile);
    // }

    return (
        <div>
            <Navbar />

            <div className="flex flex-col md:flex-row justify-between my-14 w-[94%] lg:max-w-6xl mx-auto">
                <img className="w-full md:w-[35%]" src="https://i.ibb.co/gw8szCN/humans-2.png" alt="" />
                <div className="w-full md:w-[65%]">
                    <h2 className="mb-8 text-center text-6xl text-[#ff0000] font-bold font-poetsen">Sign Up</h2>
                    <div className="card shrink-0 w-full lg:w-[80%] mx-auto shadow-2xl bg-[#ff4800]">
                        <form className="card-body space-y-4" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex justify-between gap-4">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text text-white font-bold text-base">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your name" className="input input-bordered" {...register('name')} />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text text-white font-bold text-base">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" {...register('email')} />
                                </div>
                            </div>
                            <div className="flex justify-between gap-4">
                                <div className="form-control w-1/2">
                                    <label className="mb-2 font-bold text-base text-white" htmlFor="division">Division</label>
                                    <select
                                        {...register('division')}
                                        value={selectedDivision}
                                        onChange={handleDivisionChange}
                                        id="division"
                                        className="p-2 rounded-lg"
                                    >
                                        <option value="Dhaka">Dhaka</option>
                                        <option value="Mymensingh">Mymensingh</option>
                                        <option value="Chattogram">Chattogram</option>
                                        <option value="Rajshahi">Rajshahi</option>
                                        <option value="Khulna">Khulna</option>
                                        <option value="Barishal">Barishal</option>
                                        <option value="Rangpur">Rangpur</option>
                                        <option value="Sylhet">Sylhet</option>
                                        {/* Uncomment and use this if you have a dynamic list */}
                                        {/* {allDivision.map((item, index) => (
            <option key={index} value={item.name}>{item.name}</option>
        ))} */}
                                    </select>
                                    <p className="mt-2 text-white">Selected Division: {selectedDivision}</p>
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="mb-2 font-bold text-base text-white" htmlFor="district">District</label>
                                    <select
                                        {...register('district')}
                                        onChange={handleDistrictChange}
                                        id="district"
                                        className="p-2 rounded-lg">
                                        <option value="" disabled>Select district</option>
                                        {allDistricts.map((district, index) => (
                                            <option key={index} value={district}>{district}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-between gap-4">
                                <div className="form-control w-1/2">
                                    <label className="mb-2 font-bold text-base text-white" htmlFor="upazila">Upazila</label>
                                    <select
                                        
                                        {...register('upazila')}
                                        id="upazila"
                                        className="p-2 rounded-lg">
                                        <option value="" disabled>Select district than upazila</option>
                                        {expectedUpazilas.map((upazila, index) => (
                                            <option key={index} value={upazila}>{upazila}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="mb-2 font-bold text-base text-white" htmlFor="district">Blood Group</label>
                                    <select
                                        {...register('blood')}
                                        id="district"
                                        className="p-2 rounded-lg">
                                        <option value="" disabled>select blood group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-between gap-4">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text text-white font-bold text-base">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" {...register('password')} />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text text-white font-bold text-base">Confirm Password</span>
                                    </label>
                                    <input type="password" placeholder="confirm password" className="input input-bordered" {...register('confirm_password')} />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="mb-2 font-bold text-base text-white" htmlFor="">Your Profile</label>
                                <input type="file" className="file-input w-full max-w-xs" {...register('profile')} />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-white font-bold">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
