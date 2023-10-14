import React from 'react'
import { Member } from './Member'

const OurTeam = () => {
    const team = [
        {
            name: 'john doe',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
            title: 'founder',
        },
        {
            name: 'jane doe',
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
            title: 'blockchain developer',
        },
        {
            name: 'michael doe',
            image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1536&q=80',
            title: 'architect',
        }
    ]
    return (
        <div className='w-full mt-20 min-h-screen'>
            <div className="mx-auto  max-w-7xl px-2 md:px-0">
                <div className="my-4">
                    <h1 className="text-5xl font-bold text-center">People who made it successful</h1>
                    <p className="my-6 mb-20 text-gray-500 text-center px-10">
                        We take pride in our diverse and dedicated team of professionals. Our team members bring a wealth of expertise, creativity, and passion to the table, working collaboratively to achieve our goals. We are committed to delivering top-notch services, and our team's collective experience and shared values drive our success. Get to know the faces behind the excellence that powers our company.
                    </p>
                </div>
                <div className="flex lg:w-11/12 md:w-8/12 w-11/12 mx-auto flex-col md:flex-row gap-x-1 justify-between gap-y-20 items-center flex-wrap ">
                    {
                        team.map((member, index) => {
                            return (
                                <Member
                                    key={index}
                                    name={member.name}
                                    image={member.image}
                                    title={member.title}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default OurTeam