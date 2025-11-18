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
            {/* NOTE: ProfessorsPage.tsx and MorePage.tsx do not yet exist as of 11/18/2025 */}

            <header>

                {/* YACS logo (not included, text for now) */}

                <h1 className="text-xl font-semibold tracking-wide">YACS</h1>

                {/* Page Links */}

                <nav className="flex items-center space-x-6 text-sm text-gray-300">
                    <a href="/HomePage.tsx" className="hover:text-white">Semester</a>
                    <a href="/ProfessorsPage.tsx" className="hover:text-white">Professors</a>
                    <a href="/FourYearPlannerPage.tsx" className="hover:text-white">Four-Year Planner</a>
                    <a href="/MorePage.tsx" className="hover:text-white">More</a>
                    <a href="/AboutUsPage.tsx" className="hover:text-white">About YACS</a>
                </nav>

            </header>

            {/* Body / Profile Content Section */}

            <main className="flex-grow flex flex-col items-center mt-16 px-6">
                
                {/* Upper Section: Profile Image, Name, & Edit Button */}

                <div>

                    {/* Student Image (placeholder for now) */}

                    <img
                    src={user.imageURL}
                    alt="Profile Picture"
                    className="w-40 h-40 rounded-full object-cover border border-gray-600"
                    />

                    {/* "Edit Profile" Button */}

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

            {/* Footer Section */}

            <footer className="bg-neutral-950 py-8 border-t border-gray-700">

                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">

                    <div className="mb-4 md:mb-0">

                        {/* RCOS logo (placeholder for now) */}

                        <div className="bg-gray-800 px-4 py-2 rounded-md font-semibold text-lg">
                            RCOS
                        </div>

                    </div>

                    <div className="flex space-x-6 text-gray-400 text-sm">

                        {/* Footer Links */}
                        {/* NOTE: BugReport.tsx does not exist as of 11/18/2025 */}

                        <a href="/BugReport.tsx" className="hover:text-white">
                            Report a Bug
                        </a>
                        <a href="https://github.com/maggietrebilcock/yacs/tree/main" className="hover:text-white">
                            YACS GitHub
                        </a>
                        <a href="https://new.rcos.io/handbook/?semester=202508" className="hover:text-white">
                            About RCOS
                        </a>

                    </div>

                </div>

            </footer>

        </div>

    );

};

export default ProfilePage;