import { useRef, useState, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { useForm } from 'react-hook-form';

const AddBlog = () => {

    // ======
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        // Register the detail_content field manually
        register('detail_content', { required: true });
    }, [register]);

    const onSubmit = async (data) => {
        // Add the editor content to the form data
        data.detail_content = content;
        console.log(data.detail_content);
    };

    return (
        <div>
            {

                <p>Please make sure that you doing  continously.</p>
            }
            <h1 className="text-4xl font-bold text-black text-center mt-8 mb-6">Add Blog</h1>
            <div className="card shrink-0 w-full md:w-[60%] mx-auto shadow-2xl bg-[#2f4858]">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white font-semibold text-base">Blog Title</span>
                        </label>
                        <input
                            {...register('title', { required: true })}
                            type="text" placeholder="Blog Title" className="input input-bordered" />
                        {errors.title && <span className="text-red-500">Title is required</span>}
                    </div>
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text text-white font-semibold text-base">Select a photo</span>
                        </label>
                        <input
                            {...register('photo', { required: true })}
                            type="file" className="file-input w-full max-w-xs" />
                        {errors.photo && <span className="text-red-500">Photo is required</span>}
                    </div>
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text text-white font-semibold text-base">Content</span>
                        </label>
                        <JoditEditor
                            ref={editor}
                            value={content}
                            tabIndex={1}
                            onChange={newContent => {
                                setContent(newContent);
                                setValue('detail_content', newContent);
                            }}
                        />
                        {errors.detail_content && <span className="text-red-500">Content is required</span>}
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-white">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;
