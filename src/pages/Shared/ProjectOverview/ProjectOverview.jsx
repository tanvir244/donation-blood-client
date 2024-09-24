import AdminSlider from "../../ProjectOverview/OverviewSliders/AdminSlider";
import VolunteerSlider from "../../ProjectOverview/OverviewSliders/VolunteerSlider";
import DonorSlider from "../../ProjectOverview/OverviewSliders/DonorSlider";


const ProjectOverview = () => {
    return (
        <div>
            <div className='min-h-[100vh] bg-[#fdf0d5] py-12'>
                <div className='max-w-6xl mx-auto'>
                    <div>
                        <h1 className='text-4xl font-extrabold text-[#000814] text-center mb-8'>Admin Dashboard Overview</h1>
                        <AdminSlider />
                    </div>
                    <div className='my-28'>
                        <h1 className='text-4xl font-extrabold text-[#000814] text-center mb-8'>Volunteer Dashboard Overview</h1>
                        <VolunteerSlider />
                    </div>
                    <div className=''>
                        <h1 className='text-4xl font-extrabold text-[#000814] text-center mb-8'>Donor Dashboard Overview</h1>
                        <DonorSlider />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectOverview;