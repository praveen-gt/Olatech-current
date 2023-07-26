import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import cx from "clsx";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
// import LogoImg from "@public/img/dummylogo.svg";

const navigation = [
  {
    title: "Solution",
    path: "#",
    children: [
      { title: "Construction, Plumbing & Services Training Package", path: "construction-plumbing-services-training-package" },
      { title: "AUR-Automotive Retail , Service & Repair Training Package", path: "aur-automotive-retail-service-repair-training-package" },
      { title: "Resources & Infrastructure Industry Training Package", path: "#" },
      { title: "AutomaBSB – Business Services Training Packagetions", path: "#" },
    ],
  },
  {
    title: "Products",
    path: "#",
    children: [
      { title: "Ola Aspire", path: "ola-aspire-lms" },
      { title: "Ola Nurture", path: "ola-nurture-lms" },
      { title: "Ola Upskill", path: "ola-upskill-lms" },
    ],
  },
  // {
  //   title: "Services",
  //   path: "#",
  //   children: [
  //     { title: "Course Development", path: "course-development-lms" },
  //     { title: "Infra and IT", path: "infra-and-it-lms" },
  //     { title: "Big Blue Button Integration", path: "lms-big-blue-button-integration" },
  //   ],
  // },
  { title: "Our Company", path: "about" },
  { title: "Contact", path: "contact" },
];

export default function NavbarModern() {
  return (
    <>
      <div className="px-3 max-w-screen-xl py-2 mx-auto">
        <nav className="relative flex flex-wrap items-center justify-between py-3 mx-auto lg:justify-between">
          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
            <Logo />
            {/* Mobile Menu  */}
            <MobileMenu />
          </div>

          {/* Desktop Menu  */}
          <div className="hidden text-center lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 lg:pt-0 list-reset">
              <NavItems navigation={navigation} />
            </ul>
            <ActionButtons />
          </div>
        </nav>
      </div>
    </>
  );
}

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
        <Image
          className="block h-8 w-auto lg:hidden"
          src='/static/OlaTech-Logo.svg'
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '75%', height: 'auto' }}
          alt="Olatech Logo"
        />
        <Image
          className="hidden w-auto lg:block"
          src='/static/OlaTech-Logo.svg'
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '75%', height: 'auto' }}
          alt="Olatech Logo"
        />
    </Link>
  );
};

const Hamburger = ({ open }:any) => {
  return (
    <Disclosure.Button
      aria-label="Toggle Menu"
      className="px-2 py-1 ml-auto  text-gray-700 rounded-md lg:hidden hover:text-black focus:text-indigo-500 focus:bg-indigo-50 focus:outline-none ">
      <svg
        className="w-6 h-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        {open && (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
          />
        )}
        {!open && (
          <path
            fillRule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        )}
      </svg>
    </Disclosure.Button>
  );
};

const MobileMenu = () => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Hamburger open={open} />

          <Disclosure.Panel className="flex flex-col w-full my-5 lg:hidden">
            <>
              <NavItems navigation={navigation} mobile={true} />
              <ActionButtons mobile={true} />
            </>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

const ActionButtons = ({ mobile }:any) => {
  return (
    <div
      className={cx(
        mobile ? "flex gap-3 mt-2" : "hidden mx-3 gap-3 ml-12 lg:flex"
      )}>
      <Link href="/contact" 
      className={`globalButton px-5 py-1.5 text-gray-500 rounded-md font-semibold `} style={{
        backgroundColor: 'var(--global-green-primary)',
        color:'#fff',
        border: 'none',
        fontSize: 15
      }}>
    Book a demo
      </Link>
    </div>
  );
};

const NavItems = (props:any) => {
  return (
    <>
      {props.navigation.map((item:any, index:any) => {
        return (
          <div key={index}>
            {item.children && item.children.length > 0 ? (
              <DropdownMenu
                menu={item}
                items={item.children}
                mobile={props.mobile}
              />
            ) : (
              <MenuItem item={item} mobile={props.mobile} />
            )}
          </div>
        );
      })}
    </>
  );
};

const MenuItem = ({ item, mobile }:any) => {
  return (
    <Link href={item?.path ? item.path : "#"} 
        className={cx(
          "text-gray-700 dark:text-black font-semibold text-base tracking-normal rounded-md outline-none hover:text-black focus:text-indigo-500  transition-all focus-visible:ring-1 ring-indigo-300 dark:focus-visible:bg-gray-100 focus:outline-none",
          mobile
            ? "w-full block px-4 py-2 -ml-4"
            : "inline-block px-4 py-2"
        )}>
        {item.title}
    </Link>
  );
};

const DropdownMenu = ({ menu, items, mobile }:any) => {
  return (
    <Menu as="div" className="relative text-left">
      {({ open }) => (
        <>
          <Menu.Button
            className={cx(
              "flex font-semibold text-base tracking-normal items-center gap-x-1 transition-all rounded-md outline-none focus:outline-none focus-visible:ring-1  focus-visible:text-indigo-500 dark:focus-visible:bg-gray-100",
              open
                ? "text-indigo-500 hover:text-black"
                : "text-gray-700 dark:text-black hover:text-black",
              mobile
                ? "w-full px-4 py-2 -ml-4"
                : "inline-block px-4 py-2"
            )}>
            <span>{menu.title}</span>
            <ChevronDownIcon className="w-4 h-4" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="lg:transition lg:ease-out lg:duration-100"
            enterFrom="lg:transform lg:opacity-0 lg:scale-95"
            enterTo="lg:transform lg:opacity-100 lg:scale-100"
            leave="lg:transition lg:ease-in lg:duration-75"
            leaveFrom="lg:transform lg:opacity-100 lg:scale-100"
            leaveTo="lg:transform lg:opacity-0 lg:scale-95">
            <Menu.Items
              className={cx(
                "z-10 lg:w-max origin-top-left  rounded-md  lg:absolute lg:left-0  focus:outline-none",
                !mobile && "bg-white shadow-lg  dark:bg-gray-100 dark:text-white"
              )}>
              <div className={cx(!mobile && "py-3")}>
                {items.map((item:any, index:any, row:any) => (
                  <Menu.Item as="div" key={index}>
                    {({ active }) => (
                      <Link href={item?.path ? item.path : "#"} 
                          className={cx(
                            "flex space-x-2 lg:space-x-4 items-center px-5 py-2",
                            active
                              ? "text-indigo-500 dark:text-white"
                              : "text-gray-700 dark:text-black hover:text-black focus:text-indigo-500"
                          )} style={{
                            borderBottomColor: 'green',
                            borderBottomWidth: index !== row.length -1 ? 1 : 0
                          }}>
                          <span> {item.title}</span>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};