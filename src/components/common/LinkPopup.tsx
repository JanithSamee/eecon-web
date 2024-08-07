"use client";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, ReactNode, useState } from "react";
import ActionButton from "./ActionButton";
import Link from "next/link";

export default function LinkPopup({
    name,
    title,
    content,
}: {
    name?: string;
    title?: string;
    content?: ReactNode;
}) {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <span
                onClick={openModal}
                className="text-red-500 hover:text-red-600 cursor-pointer"
            >
                {name || "Learn More!"}
            </span>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden  bg-white p-4 pt-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {title || "EECon-2024"}
                                    </Dialog.Title>
                                    <div className="divide-y divide-blue-200">
                                        <div className="pb-4 mb-2 border-t-2 border-blue-950"></div>
                                        <Image
                                            src={
                                                "/flyers/call_for_papers_flyer.jpg"
                                            }
                                            // src="https://i.ibb.co/rFLdgzG/pexels-alessandro-simonetto-1474937.png"
                                            alt="EECon Call For Papers"
                                            width={600}
                                            height={900}
                                        ></Image>
                                    </div>
                                    <div className="border-t-2 float-right">
                                        <Link
                                            target="blank"
                                            href={
                                                "https://ieeexplore.ieee.org/xpl/conhome/1817965/all-proceedings"
                                            }
                                            className="text-sm text-blue-600 focus:outline-none hover:text-blue-700"
                                        >
                                            Go to Past Proceedings
                                        </Link>
                                        <ActionButton
                                            className="bg-white text-red-500 text-sm p-4 hover:text-red-700"
                                            onClick={closeModal}
                                        >
                                            Close
                                        </ActionButton>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
