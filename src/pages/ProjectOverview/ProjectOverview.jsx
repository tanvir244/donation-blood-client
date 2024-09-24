import Navbar from '../Shared/Navbar/Navbar';
import AdminSlider from './OverviewSliders/AdminSlider';
import VolunteerSlider from './OverviewSliders/VolunteerSlider';
import DonorSlider from './OverviewSliders/DonorSlider';

const ProjectOverview = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[100vh] bg-[#fdf0d5] py-12'>
                <div className='max-w-6xl mx-auto'>
                    <div>
                        <h1 className='text-4xl font-extrabold text-[#000814] text-center mb-8'>Admin Dashboard Overview</h1>
                        <AdminSlider />
                    </div>
                    <div className='my-36'>
                        <h1 className='text-4xl font-extrabold text-[#000814] text-center mb-8'>Volunteer Dashboard Overview</h1>
                        <VolunteerSlider />
                    </div>
                    <div className='my-36'>
                        <h1 className='text-4xl font-extrabold text-[#000814] text-center mb-8'>Donor Dashboard Overview</h1>
                        <DonorSlider />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectOverview;