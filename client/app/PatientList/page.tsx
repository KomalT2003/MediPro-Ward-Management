/* This example requires Tailwind CSS v2.0+ */
// import { MailIcon, PhoneIcon } from '@heroicons/react/solid'

const people = [
  {
    id: 1,
    name: 'Jane Cooper',
    disease: 'Allergic Cough and Cold',
    days: 5,
    nurse: 'Mrs. Stacy',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    id: 2,
    name: 'Komal',
    disease: 'Abdominal Gastroenris',
    days: 6,
    nurse: 'Miss Kathy' ,
    imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  },
  // More people...
]

export default function Example() {
  return (
    <div className="bg-gray-200 h-screen">
    <ul role="list" className="mx-5 my-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <li key={person.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="text-gray-900 text-sm font-medium truncate">{person.name}</h3>
                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {person.days} days ago
                </span>
              </div>
              
              <p className="mt-1 text-gray-500 text-sm truncate">{person.disease}</p>
            </div>
            <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src={person.imageUrl} alt="" />
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  href={'/patientDetails'}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  {/* <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" /> */}
                  <span className="ml-3">View Patient</span>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={`tel:${person.nurse}`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  {/* <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" /> */}
                  <span className="ml-3">Call Nurse</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </div>
  )
}
