import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.svg";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#about", current: false },
  { name: "Events", href: "#events", current: false },
  { name: "Team", href: "#team", current: false },
  { name: "Contact", href: "#contact", current: false },
];

export default function Navbar() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto px-6 sm:px-12 lg:px-24 py-2">
                <div className="flex items-center justify-between">
                  <div className="flex-shrink-0">
                    <img
                      className="md:h-16 md:w-16 h-12 w-12"
                      src={logo}
                      alt="Ecell"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="flex items-baseline space-x-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={`rounded-md px-3 py-2 text-lg font-medium ${
                            item.current
                              ? "bg-slate-50 text-blue-600"
                              : "text-black hover:bg-slate-100"
                          }`}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-black hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-50">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={`
                        ${
                          item.current
                            ? "bg-slate-200 text-black"
                            : "hover:bg-slate-100"
                        }
                        block rounded-md px-3 py-2 text-base font-medium
                      `}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
