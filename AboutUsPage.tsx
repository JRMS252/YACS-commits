import React from "react";
import {Moon, Sun} from "lucide-react";

const AboutUsPage: React.FC = () => {
    const [darkMode, setDarkMode] = React.useState(true);

    return (
        <div className={darkMode ? "bg-neutral-900 text-gray-100" : "bg-white text-gray-800"}>

            {/* Header Section */}

            <header className="flex justify-between items-center px-8 py-4 border-b border-gray-700 bg-neutral-950">

                <div className="flex items-center space-x-4">
                    <h1 className="text-x1 font-semibold tracking-wide">YACS</h1>
                    <div className="relative">
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

                <nav className="flex items-center space-x-8 text-sm text-gray-300">
                    <a href="/FourYearPlannerPage.tsx" className="hover:text-white transition">
                        View Four-Year Degree Planner
                    </a>
                    <span className="text-gray-500">|</span>
                    <a href="/HomePage.tsx" className="hover:text-white transition">
                        View Current Semester Schedule
                    </a>

                    <button className="border border-gray-500 rounded-md px-3 py-1 hover:bg-gray-700 transtion">
                        View Profile
                    </button>
                 </nav>

            </header>

            {/* Main Body / Content Section */}

            <main className="flex flex-col items-center px-6 py-16 text-center">

                <h2 className="text-3xl font-semibold mb-4">
                    About YACS
                </h2>
                <hr className="w-1/3 border-gray-600 mb-8"/>

                <div className="max-w-3xl space-y-6 text-lg leading-relaxed">
                    <p>
                        <strong>YACS (Yet Another Course Scheduler)</strong> is a course scheduling
                        assistant designed to help students easily design their schedules
                        semester-by-semester for all 4 years of their undergraduate studies.
                    </p>

                    <p>
                        YACS allows students to:
                    </p>

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

                    <p>
                        YACS provides students with an up-to-date interface to explore which classes
                        they want to take and what they want their overall degree plan to look like.
                        It provides many additional quality-of-life features that allow students to
                        view in-depth information about courses and professors, helping them to tailor
                        their experience to fit their individual needs.
                    </p>

                    <p>
                        YACS is an open-source project produced by the YACS team in collaboration with
                        the <strong>Rensselaer Center for Open-Source Development (RCOS)</strong> at{" "}
                        <strong>Rensselaer Polytechnic Institute</strong> in Troy, New York, USA.
                    </p>

                </div>
            </main>

            {/* Footer Section */}



        </div>
    );

};

export default AboutUsPage;