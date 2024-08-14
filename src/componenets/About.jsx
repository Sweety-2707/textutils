import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://think.kera.org/wp-content/uploads/2022/09/shutterstock_1710628027-800x500.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            About TextUtils Project
                        </h2>
                        <p className="mt-6 text-gray-600">
                            In this Project, user can type text in the textarea and then by clicking on the buttons available below textarea such as Convert to Upper Case, Convert to Lower Case and Clear Text, user can Modify the Text
                        </p>
                        <p className="mt-4 text-gray-600">
                            An Summary of the text is displayed below such as word count, characters count and sentence count
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}