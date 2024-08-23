export default function Members({ members }) {
    return (
        <div className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow m-5">
            <div className="flex bg-gray-800 text-white rounded-t-lg">
                <div className="p-2">
                    Members
                </div>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-4 p-2 items-center">
            {members.map((people) => (
                <li
                    key={people.name} 
                    className="flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow justify-items-center"
                >
                    <div className="flex flex-1 flex-col p-8 items-center">
                        <img 
                            alt={people.name} 
                            src={people.imgUrl} 
                            className="mx-auto object-cover max-h-32 w-auto" 
                        />
                        <h3 className="mt-6 text-sm font-medium text-gray-900">{people.name}</h3>
                        <dl className="mt-1 flex flex-grow flex-col justify-between items-center">
                            <dt className="sr-only">Current</dt>
                            <dd className="text-sm text-gray-500">{people.current}</dd>
                            <dt className="sr-only">Position</dt>
                            <dd className="mt-3">
                                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                    {people.position}
                                </span>
                            </dd>
                        </dl>
                    </div>
                </li>
            ))}
            </ul>
        </div>
    )
}