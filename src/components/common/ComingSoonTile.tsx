import React from "react";

function ComingSoonTile() {
    return (
        <div className="flex flex-col w-full justify-item-start ">
            <div className="bg-white w-full  flex mt-4  shadow-lg">
                <div className="flex flex-col p-4 text-white bg-blue-950 justify-center items-center ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 animate-spin"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                    </svg>
                </div>
                <div className="grow p-4 text-black text-left">
                    <p className="font-bold text-medium">{"Coming Soon..."}</p>

                    <p className="text-gray-400 italic">
                        {"Keynote Speakers will be updated soon.."}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ComingSoonTile;
