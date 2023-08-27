"use client";
import Link from 'next/link';
import { Fragment, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { ShieldCheckIcon, XIcon, BackspaceIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/outline'
import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from '@heroicons/react/solid'

const patient = {
    name: 'Komal',
    disease: 'Allergic Cold and Cough',
    imageSrc: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    href: '#',
    room: 808,
    ward: '8B',
    imageAlt: 'Interior of light green canvas bag with padded laptop sleeve and internal organization pouch.',
    medicines: [
        { name: 'Allegra ', dose: 180, frequency: [1,1] },
        { name: 'Monocef Antibiotic', dose: 3, frequency: [2,1] },
    ],
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [open, setOpen] = useState(true)
    const [selectedMedicine, setSelectedMedicine] = useState(patient.medicines[0])
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`
    let i = 0
    const notificationMethods = [
        { id: '4 a.m.', title: '4' },
        { id: '8 a.m.', title: '8' },
        { id: '12 p.m.', title: '12' },
        { id: '4 p.m.', title: '16' },
        { id: '8 p.m.', title: '20' },
        { id: '00 a.m.', title: '00' },

      ]

    return (
        <div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
                    <div className="flex min-h-screen text-center md:block md:px-2 lg:px-4" style={{ fontSize: 0 }}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                            enterTo="opacity-100 translate-y-0 md:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 md:scale-100"
                            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                        >
                            <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
                                <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                    <Link href='/PatientList'>
                                        <button
                                            type="button"
                                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"

                                        >
                                            <span className="sr-only">Close</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </Link>

                                    <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                                        <div className="sm:col-span-4 lg:col-span-5">
                                            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                                                <img src={patient.imageSrc} alt={patient.imageAlt} className="object-center object-cover" />
                                            </div>
                                            <p className="absolute top-4 left-4 text-center sm:static sm:mt-6">
                                                <a href={patient.href} className="font-medium text-teal-600 hover:text-indigo-500">
                                                    View Test Reports
                                                </a>
                                            </p>
                                            
                                            
                                        </div>
                                        <div className="sm:col-span-8 lg:col-span-7">
                                            <div>
                                                <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{patient.name}</h2>
                                                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                                    {patient.room} - {patient.ward}
                                                </span>
                                            </div>

                                            <section aria-labelledby="information-heading" className="mt-4">
                                                <div className="flex items-center">
                                                    <p className="text-lg text-gray-900 sm:text-xl">{patient.disease}</p>

                                                </div>

                                                <div className="mt-6 flex items-center">
                                                    <ChevronDoubleLeftIcon className="flex-shrink-0 w-5 h-5 text-green-500 mx-2 " aria-hidden="true" />
                                                    <p className="ml-2 font-medium text-gray-500">Today {date}</p>
                                                    <ChevronDoubleRightIcon className="flex-shrink-0 w-5 h-5 text-green-500 mx-2 " aria-hidden="true" />

                                                </div>

                                            </section>
                                            <div className='py-2'>
                                                <p className='py-2'>Today's Patient Feedback </p>
                                            <textarea
                  id="message"
                  name="message"
                  rows={1}
                  className="py-1 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                  defaultValue={''}
                />
                </div>
                                            <section aria-labelledby="options-heading" className="mt-6">
                                                <h3 id="options-heading" className="sr-only">
                                                    Medicine
                                                </h3>
                                                <fieldset className="border-t border-b border-gray-200">
                                                    <legend className="sr-only">Notifications</legend>
                                                    {patient.medicines.map((medicine) =>
                                                        
                                                            <div className="divide-y divide-gray-200">
                                                                <div className="relative flex items-start py-4">
                                                                    <div className="min-w-0 flex-1 text-sm">
                                                                        <label htmlFor="comments" className="font-medium text-gray-700">
                                                                            {medicine.name}
                                                                        </label>
                                                                        <p id="comments-description" className="text-gray-500">
                                                                            {medicine.dose}
                                                                        </p>
                                                                    </div>
                                                                    { medicine.frequency.map((f) => 
                                                                    <div className="ml-3 flex items-center h-5">
                                                                        <p>{f} - </p>
                                                                        <input
                                                                            id="comments"
                                                                            aria-describedby="comments-description"
                                                                            name="comments"
                                                                            type="checkbox"
                                                                            className="focus:ring-indigo-500 h-4 w-4 mx-1 text-indigo-600 border-gray-300 rounded"
                                                                        />
                                                                    </div>)}
                                                                </div>
                                                            </div> 
                                                             )}
                                                        </fieldset>
                    </section>
                    <div>
                                            <button type="submit"
                                           className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Update Medicines
                                           </button>
                                        </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}
