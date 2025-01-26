'use client';

import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-transparent bg-opacity-50 backdrop-blur-sm" style={{ height: '9vw' }}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between  lg:px-2">
        <div className="flex lg:flex-1">
          <HashLink to="#home" smooth className="-m-1.5 ">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src={'/vitlogo+40-01.png'}
              className="h-8 w-auto"
              style={{ width: '25vw', height: '10vw' }}
            />
          </HashLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex mt-4 items-center gap-x-1 text-sm/6 font-light text-white ml-6" style={{ fontSize: '1.3vw' }}>
              <HashLink smooth to="#event">Event</HashLink>
            </PopoverButton>
          </Popover>

          <HashLink smooth to="#organizers" className="mt-4 text-sm/6 font-light text-white" style={{ fontSize: '1.3vw' }}>
            Organizers
          </HashLink>
          <HashLink smooth to="#faqs" className="mt-4 text-sm/6 font-light text-white" style={{ fontSize: '1.3vw' }}>
            FAQs
          </HashLink>
          <HashLink smooth to="#sponsors" className="mt-4 text-sm/6 font-light text-white" style={{ fontSize: '1.3vw' }}>
            Sponsors
          </HashLink>
          <HashLink smooth to="#contact-us" className="mt-4 text-sm/6 font-light text-white" style={{ fontSize: '1.3vw' }}>
            Contact Us
          </HashLink>
          <div>
            <img src={'/Asset 1img.png'} style={{height:"4vw",width:"12vw"}} className='mr-5 ml-24'/>
          </div>
          
        </PopoverGroup>
        
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <HashLink smooth to="#event" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  Event
                </HashLink>
                <HashLink smooth to="#organizers" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  Organizers
                </HashLink>
                <HashLink smooth to="#faqs" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  FAQs
                </HashLink>
                <HashLink smooth to="#sponsors" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  Sponsors
                </HashLink>
                <HashLink smooth to="#contact-us" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  Contact Us
                </HashLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
