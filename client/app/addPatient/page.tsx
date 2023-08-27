"use client";
import { useState } from 'react'
import { Switch } from '@headlessui/react'
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [agreed, setAgreed] = useState(false)
  const [medicines, setMedicines] = useState([{ name: "", dose: "", frequency: ""}])

  let handleChange = (i, e) => {
    let newMedicines = [...medicines];
    newMedicines[i][e.target.name] = e.target.value;
    setMedicines(newMedicines);
  }

  let addFormFields = () => {
    setMedicines([...medicines, { name: "", times: "" ,gap: ""}])
  }
  function removeFormFields(i) {
    let newMedicines = [...medicines];
    newMedicines.splice(i, 1);
    setMedicines(newMedicines)
  }
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute left-full transform translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Add Patient</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Add Patient Details.
          </p>
        </div>
        <div className="mt-12">
          <form action="#" method="POST" className="grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:gap-x-6">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="py-2 px-5 block w-full shadow-sm focus:ring-indigo-500 border border-gray-300 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="py-2 px-5 block w-2/3  shadow-sm focus:ring-indigo-500 border border-gray-300 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
              
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Weight
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="py-2 px-5 w-2/3 block w-full  shadow-sm focus:ring-indigo-500 border border-gray-300 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
              
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Diagnosis 
              </label>
              <div className="mt-1">
              <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                  defaultValue={''}
                />
              </div>
            </div>
            <div className='sm:col-span-3' >
            <div className='sm:col-span-3'>
                <h3>Medical Prescription</h3>
            {medicines.map((element, index) => (
            <div className='sm:col-span-3' key={index}>
              <input  className="py-1 my-1 px-2 block shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md" placeholder='medicine name ' type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
              <input className="py-1 my-1 px-2 block shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md" placeholder='dosage' type="number" name="dose" value={element.dose || ""} onChange={e => handleChange(index, e)} />
              <input className="py-1 my-1 px-2 block shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md" placeholder='frequency' type="number" name="frequency" value={element.frequency || ""} onChange={e => handleChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
          </div>
          </div>
          </div>
            
            <div className="sm:col-span-3">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Recommended Tests
              </label>
              <div className="mt-1">
              <input
                  type="text"
                  name="Tests"
                  id="last-name"
                  autoComplete="family-name"
                  className="py-2 px-5 block w-full  shadow-sm focus:ring-indigo-500 border border-gray-300 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-teal-500' : 'bg-gray-200',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                      )}
                    />
                  </Switch>
                </div>
                <div className="ml-3 ">
                  <p className="text-base text-gray-500">
                    Check this for any{' '}
                    <a href="#" className="font-medium text-gray-700 underline">
                      allergies
                    </a>{' '}
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-3">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Admit Patient
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
