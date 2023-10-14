import React from 'react'

const Contact = () => {
    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <section className='w-full max-w-md mx-10'>
                <div className="xl:mx-auto xl:w-full pt-10 xl:max-w-sm 2xl:max-w-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">

                    <div className="mb-2 flex justify-center">
                        <img src="https://bafybeigj25ax2rek4dygzjd4aw6vvf4vaklfu2jtrf4hw7dmcpy5jeaeta.ipfs.dweb.link/" className="h-8 mr-3" alt="Flowbite Logo" />
                    </div>

                    <h2 className="text-center text-2xl font-bold leading-tight text-black">
                        Get in Touch with Us
                    </h2>
                    <form action="#" method="POST" className="p-6 ">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="name" className="text-base font-medium text-gray-900">
                                    {' '}
                                    Full Name{' '}
                                </label>
                                <div className="mt-2">
                                    <input
                                        required
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text"
                                        placeholder="Full Name"
                                        id="name"
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="text-base font-medium text-gray-900">
                                    {' '}
                                    Email address{' '}
                                </label>
                                <div className="mt-2">
                                    <input
                                        required
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="email"
                                        placeholder="Email"
                                        id="email"
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="msg" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Massage{' '}
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <textarea
                                        required
                                        placeholder='Enter your massage here...'
                                        rows={6}
                                        className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        id='msg'

                                    ></textarea>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                >
                                    {/* Create Account <ArrowRight className="ml-2" size={16} /> */}
                                    Send Massage
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact