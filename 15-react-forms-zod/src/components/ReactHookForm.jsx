import { useForm } from 'react-hook-form'
import Loading from './Loading'
export default function ReactHookForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm()

    // const onSubmit = (data) => console.log('Form Submited', data)

    // convert into async operation
    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 3000))
        console.log('Form Submited', data)
    }

    return (
        <div className="h-screen w-screen grid place-content-center gap-y-10">
            <h2 className="font-semibold text-3xl">
                Handling React Hook Form !!
            </h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-y-3 w-96"
            >
                <input
                    {...register('email', {
                        required: 'Please enter your email',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                        },
                    })}
                    type="text"
                    placeholder="Enter your name"
                    className="h-12 w-full block px-4 border border-gray-600 rounded-md"
                />
                {errors.email && (
                    <span className="text-red-500 text-xs font-medium">
                        {errors.email.message}
                    </span>
                )}

                <input
                    {...register('password', { required: true, minLength: 4 })}
                    type="password"
                    placeholder="Enter your password"
                    className="h-12 w-full block px-4 border border-gray-600 rounded-md"
                />
                {errors.password && (
                    <span className="text-red-500 text-xs font-medium">
                        {errors.password.message}
                    </span>
                )}

                <button
                    disabled={isSubmitting}
                    className="h-12 w-full  text-white flex items-center justify-center"
                    type="submit"
                >
                    {isSubmitting ? <Loading /> : 'Submit'}
                </button>
            </form>
        </div>
    )
}
