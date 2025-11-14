import React from "react";

const ProfilePage: React.FC = () => {

    {/* Placeholder User Data */ }

    const user = {
        name: "John Doe",
        email: "doej54@rpi.edu",
        cohort: "2026",
        major: "Computer Science",
        minor: "Psychology",
        pathway: "Understanding Human Behavior",
        advisorEmail: "kuzmik@rpi.edu",
        imageURL: "https://via.placeholder.com/200", // Placeholder image URL
    };

    return (

        <div className="min-h-screen flex flex-col bg-neutral-900 text-gray-100">

            {/* Header Section */}

            <header>

                <h1 className="text-xl font-semibold tracking-wide">YACS</h1>

                <nav className="flex items-center space-x-6 text-sm text-gray-300">
                    <a href="/HomePage.tsx" className="hover:text-white">Semester</a>
                    <a href="/ProfessorsPage.tsx" className="hover:text-white">Professors</a>
                    <a href="/FourYearPlannerPage.tsx" className="hover:text-white">Four-Year Planner</a>
                    <a href="/MorePage.tsx" className="hover:text-white">More</a>
                </nav>

            </header>

            {/* Body / Profile Content Section */}

            <main className="flex-grow flex flex-col items-center mt-16 px-6">
                
                {/* Upper Section: Profile Image, Name, & Edit Button */}

                <div>

                    <img
                    src={user.imageURL}
                    alt="Profile Picture"
                    className="w-40 h-40 rounded-full object-cover border border-gray-600"
                    />

                    <button className="px-4 py-1 border border-gray-400 rounded-md text-sm hover:bg-gray-700 transition">
                        Edit Profile
                    </button>

                </div>

                {/* Lower Section: User Information */}

                <div className="mt-10 text-left">

                    <h2 className="text-2xl font-semibold>">
                        {user.name}
                    </h2>

                    <p className="text-gray-300">{user.email}</p>

                    <p className="text-gray-300 mb-6">
                        Cohort: Class Of {user.cohort}
                    </p>

                    <div className="space-y-3 text-lg">

                        <p>
                            <span className="font-semibold">
                                Major(s):
                            </span>
                            {user.major}
                        </p>

                        <p>
                            <span className="font-semibold">
                                Minor(s):
                            </span>
                            {user.minor}
                        </p>

                        <p>
                            <span className="font-semibold">
                                HASS Pathway:
                            </span>
                            {user.pathway}
                        </p>

                        <p>
                            <span className="font-semibold">
                                Advisor Email:
                            </span>
                            {user.advisorEmail}
                        </p>

                    </div>

                </div>

            </main>

        </div>

    );

};
