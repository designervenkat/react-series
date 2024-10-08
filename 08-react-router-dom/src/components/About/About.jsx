import { Lock } from 'lucide-react'
function About() {
    return (
        <section className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto w-full text-center md:max-w-2xl">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        About Page
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur nesciunt eos facilis debitis voluptas iure
                        consectetur odit fugit voluptate recusandae?
                    </p>
                </div>
                <form
                    action="#"
                    method="POST"
                    className="mx-auto mt-12 max-w-xl"
                >
                    <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                        <div className="flex w-full max-w-sm items-center space-x-2">
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                                type="email"
                                placeholder="Email"
                            />
                            <button
                                type="button"
                                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </form>
                <div className="mt-8 flex items-center justify-center px-8 sm:px-0">
                    <Lock className="h-4 w-4 text-gray-600" />
                    <span className="ml-2 text-sm text-gray-600">
                        Your data is complely secured with us. We don&apos;t
                        share with anyone.
                    </span>
                </div>
            </div>
        </section>
    )
}

export default About
