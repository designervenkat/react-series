import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Loading from './Loading'

// define schema
const LoginSchema = z.object({
    email: z.string().email().toLowerCase(),
    password: z.string().min(6),
    mobile: z.string().min(10, { message: 'this👏is👏too👏big' }),
})

export default function ReactHookFormZod() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(LoginSchema),
    })

    const onSubmit = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 3000))
            throw new Error()
            console.log(data)
        } catch (error) {
            console.log(error)
            setError('root', { message: 'Email is already logged in' })
        }
    }

    return (
        <div className="h-screen w-screen grid place-content-center gap-y-10">
            <h2 className="font-semibold text-3xl">
                Handling React Form with Z Validation!
            </h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-y-3 w-96"
            >
                <input
                    className="h-12 w-full block px-4 border border-gray-600 rounded-md"
                    type="text"
                    placeholder="Please enter your email"
                    {...register('email')}
                />

                {errors.email && (
                    <p className="text-red-500 text-xs">
                        {errors.email.message}
                    </p>
                )}

                <input
                    className="h-12 w-full block px-4 border border-gray-600 rounded-md"
                    type="password"
                    placeholder="Please enter your password"
                    {...register('password')}
                />

                {errors.password && (
                    <p className="text-red-500 text-xs">
                        {errors.password.message}
                    </p>
                )}

                <input
                    className="h-12 w-full block px-4 border border-gray-600 rounded-md"
                    type="number"
                    placeholder="Please enter your mobile number"
                    {...register('mobile')}
                />

                {errors.mobile && (
                    <p className="text-red-500 text-xs">
                        {errors.mobile.message}
                    </p>
                )}

                <button
                    disabled={isSubmitting}
                    className="h-12 w-full  text-white bg-black rounded-md flex justify-center"
                    type="submit"
                >
                    {isSubmitting ? <Loading /> : 'Submit'}
                </button>

                {errors.root && (
                    <p className="text-red-500 text-xs">
                        {errors.root.message}
                    </p>
                )}
            </form>
        </div>
    )
}
