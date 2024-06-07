import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import './style.css';

const Modal = ({ closeModal, id }) => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const handleDonate = id => {

        console.log(id);
        axiosSecure.patch(`/change_request_status/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Request status form pending to inprogress successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <>
            <div className="modal_wrapper"></div>
            <div className="modal_container">
                <div className="card shrink-0 w-full md:w-[350px] shadow-2xl bg-[#ffd3cb]">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-green-700">Donor Name</span>
                            </label>
                            <input type="email" value={user.displayName} className="input input-bordered" readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-green-700">Donor Email</span>
                            </label>
                            <input type="email" value={user.email} className="input input-bordered" readOnly />
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={(e) => {
                                e.preventDefault();
                                closeModal(e);
                                handleDonate(id)
                            }} className="btn bg-green-600 text-white text-base">Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Modal;


// tutorial I followd to make this custom modal
// link: https://www.youtube.com/watch?v=GMaQPv5ZsR0
