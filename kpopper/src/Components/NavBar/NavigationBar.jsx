import { Disclosure } from '@headlessui/react'
import lollipopColor from '../../assets/lollipop_color.svg';

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center justify-start">
            <div className="flex-shrink-0">
              <a href="/" aria-label="Home">
                <img
                  alt="The KPOPPER"
                  src={lollipopColor}
                  className="h-8 w-auto"
                />
              </a>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              <a
                href="/"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Home
              </a>
              <a
                href="girl"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Girl Groups
              </a>
              <a
                href="boy"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Boy Groups
              </a>
              <a
                href="solo"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Soloists
              </a>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  )
}
