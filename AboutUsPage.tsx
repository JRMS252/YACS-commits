import React from "react";
import {Moon, Sun} from "lucide-react";

const AboutUsPage: React.FC = () => {
    const [darkMode, setDarkMode] = React.useState(true);

    return (
        <div className={darkMode ? "bg-neutral-900 text-gray-100" : "bg-white text-gray-800"}>

            {/* Header Section */}

            <header className="flex justify-between items-center px-8 py-4 border-b border-gray-700 bg-neutral-950">

                <div className="flex items-center space-x-4">

                    {/* YACS Logo (Placeholder for now, replace later) */}

                    <h1 className="text-x1 font-semibold tracking-wide">YACS</h1>
                    <div className="relative">

                        {/* Toggle Page Color Scheme (Light/Dark) */}

                        <button
                        className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white"
                        onClick={() => setDarkMode(!darkMode)}>
                            <span>
                                Color Mode (Light/Dark)
                            </span>
                            {darkMode ? <Sun className="w-4 h-4"/> : <Moon className="w-4 h-4"/>}
                        </button>
                    </div>
                </div>

                {/* Header Links To Other Pages */}

                <nav className="flex items-center space-x-8 text-sm text-gray-300">

                    {/* Link To Four-Year Planner Page */}

                    <a href="/FourYearPlannerPage.tsx" className="hover:text-white transition">
                        View Four-Year Degree Planner
                    </a>
                    <span className="text-gray-500">|</span>

                    {/* Link To Current Semester Schedule (Home Page) */}

                    <a href="/HomePage.tsx" className="hover:text-white transition">
                        View Current Semester Schedule
                    </a>

                    {/* Button To Go To Profile Page (Not Functional Yet) */}

                    <button className="border border-gray-500 rounded-md px-3 py-1 hover:bg-gray-700 transtion">
                        View Profile
                    </button>
                 </nav>

            </header>

            {/* Main Body / Content Section */}

            <main className="flex flex-col items-center px-6 py-16 text-center">

                {/* "Header" */}

                <h2 className="text-3xl font-semibold mb-4">
                    About YACS
                </h2>
                <hr className="w-1/3 border-gray-600 mb-8"/>

                {/* Brief Description */}

                <div className="max-w-3xl space-y-6 text-lg leading-relaxed">
                    <p>
                        <strong>YACS (Yet Another Course Scheduler)</strong> is a course scheduling
                        assistant designed to help students easily design their schedules
                        semester-by-semester for all 4 years of their undergraduate studies.
                    </p>

                    <p>
                        YACS allows students to:
                    </p>

                    {/* Feature List */}

                    <ul className="list-disc list-inside space-y-1 text-left mx-auto w-fit">
                        <li>Create profiles</li>
                        <li>Create schedules for individual semesters</li>
                        <li>Put together a 4-year degree plan</li>
                        <li>View anticipated dates for final exams</li>
                        <li>View course prerequisite information</li>
                        <li>Explore different classes taught by specific professors</li>
                        <li>Switch between light and dark mode</li>
                        <li>And much more!</li>
                    </ul>

                    {/* More Summary */}

                    <p>
                        YACS provides students with an up-to-date interface to explore which classes
                        they want to take and what they want their overall degree plan to look like.
                        It provides many additional quality-of-life features that allow students to
                        view in-depth information about courses and professors, helping them to tailor
                        their experience to fit their individual needs.
                    </p>

                    {/* "Legal" */}

                    <p>
                        YACS is an open-source project produced by the YACS team in collaboration with
                        the <strong>Rensselaer Center for Open-Source Development (RCOS)</strong> at{" "}
                        <strong>Rensselaer Polytechnic Institute</strong> in Troy, New York, USA.
                    </p>

                </div>
            </main>

            {/* Footer Section */}

            <footer className="bg-neutral-950 py-10 text-sm text-gray-400">

                <div className="max-w-5xl mx-auto grid grid-cols2 md:grid-cols-4 gap-6 text-center md:text-left">

                    {/* Links To Other Features / Pages */}
                    {/* NOTE: ExplorePage.tsx, FinalsPage.tsx, ProfessorsPage.tsx, and PrerequisitesPage.tsx do not exist as of 11/18/2025 */}

                    <div className="space-y-2">
                        <p className="uppercase tracking-wide text-gray-300">Features</p>
                        <a href="/HomePage.tsx" className="hover:text-white">Schedule</a>
                        <a href="/ExplorePage.tsx" className="hover:text-white">Explore</a>
                        <a href="/FinalsPage.tsx" className="hover:text-white">Finals</a>
                        <a href="/ProfessorsPage.tsx" className="hover:text-white">Professors</a>
                        <a href="https://hasspathways.com" className="hover:text-white">Explore HASS Pathways</a>
                        <a href="/PrerequisitesPage.tsx" className="hover:text-white">Prerequisites</a>
                        <a href="/FourYearPlannerPage.tsx" className="hover:text-white">Four-Year Degree Planner</a>
                        <a href="/ProfilePage.tsx" className="hover:text-white">View Proile</a>
                    </div>

                    {/* Links To Support Pages */}
                    {/* NOTE: FeatureRequestPage.tsx and BugReport.tsx do not exist as of 11/18/2025 */}

                    <div className="space-y-2">
                        <p className="uppercase tracking-wide text-gray-300">Support</p>
                        <a href="/FeatureRequestPage.tsx" className="hover:text-white">Request a Feature</a>
                        <a href="/BugReport.tsx" className="hover:text-white">Report a Bug</a>
                    </div>

                    {/* Links To External Resource Pages */}

                    <div>
                        <p className="uppercase tracking-wide text-gray-300">Resources</p>
                        <a href="https://github.com/maggietrebilcock/yacs/tree/main" className="hover:text-white">YACS GitHub</a>
                        <a href="https://new.rcos.io/handbook/?semester=202508" className="hover:text-white">About RCOS</a>
                    </div>

                    {/* RCOS Logo In Bottom Left */}
                    {/* Don't Have PNG, Just Text For Now */}

                    <div className="flex items-center justify-center md:justify-end">
                        <div className="bg-gray-800 px-4 py-2 rounded-md font-semibold">RCOS</div>
                    </div>

                </div>

            </footer>

        </div>
    );

};

export default AboutUsPage;