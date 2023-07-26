import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import cx from "clsx";
import { Menu as Menu2, Transition, Disclosure } from "@headlessui/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    FaCheck,
    FaServer,
    FaUserClock,
    FaRegStickyNote,
    FaCertificate,
    FaChevronDown,
    FaBars,
    FaHamburger
} from "react-icons/fa";
import { BlockList } from "net";
import { isBlock } from "typescript";


function Menu(props: any) {
    const { isMobile } = props;
    const [selectedMenu, setSelectedMenu] = useState({});
    const children = React.Children.toArray(props.children);

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

    const ActionButtons = ({ mobile }: any) => {
        return (
            <div
                className={cx(
                    mobile ? "flex gap-3 mt-2" : "hidden mx-3 gap-3 ml-12 lg:flex"
                )}>
                <Link href="/contact"
                    className={`globalButton px-5 py-1.5 text-gray-500 rounded-md font-semibold `} style={{
                        backgroundColor: 'var(--global-green-primary)',
                        color: '#fff',
                        border: 'none',
                        fontSize: 15
                    }}>
                    Book a demo
                </Link>
            </div>
        );
    };

    return (
        <nav className="menu">
            {/* {isMobile &&
                <div className="menu-mobile">
                    <FaBars />
                </div>
            } */}
            <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Logo />
                <div className="menu-mobile">
                    {/* <FaBars /> */}
                    <MobileMenu />
                </div>
                <div className="desktop-menu hidden text-center lg:flex lg:items-center">
                    <ul className="menu-list items-center justify-end flex-1 pt-6 lg:pt-0 list-reset lg:flex">
                        {children.map((item:any, index) => {
                            return (
                                <MenuItem
                                    name={item.props.name}
                                    key={index}
                                    // onClick={() => { }}
                                >
                                    {item}
                                </MenuItem>
                            );
                        })}
                    </ul>
                    <ActionButtons />
                </div>
                {/* <ActionButtons /> */}
            </div>
        </nav>
    );
}

function MenuItem(props: any) {
    const { name } = props;
    // console.log(props.children)
    return (
        <li className="menu-item">
            {props.children.props.render &&
                <span className="link" style={{
                    display: 'flex',
                    alignItems: "center",
                    color: '#5A6C80',
                    fontWeight: '600',
                    letterSpacing: 0.2,
                    fontSize: 16,
                }}>
                    {name} <FaChevronDown color="#5A6C80" size={13} style={{ paddingLeft: 3 }} />
                </span>
            }
            {props.children}
        </li>
    );
}

MenuItem.defaultProps = {
    children: () => { }
};

function MenuDropdown(props: any) {
    const classNames = ["menu-dropdown"];
    if (props.megaMenu) {
        classNames.push("mega-menu");
    }

    return <div style={{ zIndex: 999 }} className={classNames.join(" ")}>{props.render()}</div>;
}

MenuDropdown.defaultProps = {
    render: () => { }
};

function ProductMenu() {
    return (
        <>
            <section className="menu-products">
                <div className="product-info">
                    <h3>Our Products</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className="product-links">
                    <ul className="text-left border-l-4">
                        <li>
                            <span className="product__links__title">OlaTech LMS</span>
                            <span className="product__links__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </li>
                        <li>
                            <span className="product__links__title">Automotive Assessments</span>
                            <span className="product__links__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </li>
                        <li>
                            <span className="product__links__title">Painting & Decoration</span>
                            <span className="product__links__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </li>
                        <li>
                            <span className="product__links__title">Course Development</span>
                            <span className="product__links__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </li>
                    </ul>
                </div>
            </section>
            <div className="dropdown_link_info">
                <div className="streamline-button">
                    <div>
                        <p>Interested to learn more about our products?
                            <a href="#" target="_blank" style={{ color: '#48B700' }}> View all product announcements</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

function OurSolutionMenu() {
    return (
        <div className="menu-solutions">
            <section>
                <ul className="text-left">
                    <li>
                        <Link href={""}>Private RTO</Link>
                    </li>
                    <li>
                        <Link href={""}>Tafe</Link>
                    </li>
                    <li>
                        <Link href={""}>Enterprise</Link>
                    </li>
                </ul>
            </section>
        </div>
    );
}
// function CompanyMenu() {
//     return (
//         <div className="menu-company">
//             <section>
//                 <ul>
//                     <li>Item one</li>
//                     <li>Item two</li>
//                     <li>Item three</li>
//                 </ul>
//             </section>
//         </div>
//     );
// }

// function Banner() {
//     return (
//         <article className="menu-ads">
//             <section>
//                 <img alt="sample" src="https://picsum.photos/200/100?random=1" />
//                 <p>
//                     Mauris dui nulla, tristique in porta et, convallis blandit libero. Nam
//                     tempus, diam et sodales posuere, justo lorem maximus quam.
//                 </p>
//             </section>
//             <section>
//                 <img alt="sample" src="https://picsum.photos/200/100?random=2" />
//                 <p>
//                     Mauris dui nulla, tristique in porta et, convallis blandit libero. Nam
//                     tempus, diam et sodales posuere, justo lorem maximus quam.
//                 </p>
//             </section>
//             <section>
//                 <img alt="sample" src="https://picsum.photos/200/100?random=3" />
//                 <p>
//                     Mauris dui nulla, tristique in porta et, convallis blandit libero. Nam
//                     tempus, diam et sodales posuere, justo lorem maximus quam.
//                 </p>
//             </section>
//             <section>
//                 <img alt="sample" src="https://picsum.photos/200/100?random=4" />
//                 <p>
//                     Mauris dui nulla, tristique in porta et, convallis blandit libero. Nam
//                     tempus, diam et sodales posuere, justo lorem maximus quam.
//                 </p>
//             </section>
//         </article>
//     );
// }

export function Navbar() {
    // const isMobile = typeof window !== "undefined" && window.innerWidth <= 767.98
    // const [isMenuOpen, setIsMenuOpen] = useState(!isMobile);
    // const toggle = () => isMobile && setIsMenuOpen(!isMenuOpen);
    // const ref = useRef()

    // useEffect(() => {

    //     if (isMobile) {
    //       const checkIfClickedOutside = (e) => {
    //         if (!ref.current?.contains(e.target)) {
    //           setIsMenuOpen(false);
    //         }
    //       };

    //       document.addEventListener("mousedown", checkIfClickedOutside);

    //       return () => {
    //         // Cleanup the event listener
    //         document.removeEventListener("mousedown", checkIfClickedOutside);
    //       };
    //     }
    //   }, []);


    // const hasWindow = typeof window !== 'undefined';
    // const [width, setWidth] = useState(typeof window !== 'undefined' && (window.innerWidth));
    // const [position, setPosition] = useState();

    // function handleWindowSizeChange() {
    //     if (typeof window !== 'undefined')
    //         setWidth(window.innerWidth);
    // }
    // useEffect(() => {
    //     window.navigator.geolocation.getCurrentPosition(
    //         //     (newPos) => setPosition(newPos),
    //         console.error
    //     );

    //     window.addEventListener('resize', handleWindowSizeChange);
    //     return () => {
    //         window.removeEventListener('resize', handleWindowSizeChange);
    //     }
    // }, [handleWindowSizeChange]);

    // const isMobile = (width < 768);

    // console.log('dd', isMobile, width)
    return (

        <div className='navbar-custom'>
            <div className="container mx-auto">
                <Menu>
                    <MenuDropdown
                        name="Solution"
                        // megaMenu
                        render={() => <OurSolutionMenu />}
                    />
                    <MenuDropdown
                        name="Products"
                        megaMenu
                        render={() => <ProductMenu />}
                    />
                    <Link className="link" href={"/about"}>Our Company</Link>
                    <Link className="link" href={"/contact"}>Contact</Link>
                    {/* <MenuDropdown name="Our Company" render={() => { }} />
                <MenuDropdown name="Contact" render={() => { }} /> */}
                    {/* <MenuDropdown name="Company" render={() => <CompanyMenu />} />
                <MenuDropdown name="Banners" megaMenu render={() => <Banner />} /> */}
                </Menu>
            </div>
        </div>
    )
}

const MobileMenu = () => {
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Hamburger open={open} />

                    <Disclosure.Panel className="flex flex-col w-full my-5 lg:hidden">
                        <>
                            {/* <NavItems navigation={navigation} mobile={true} /> */}
                            {/* <ActionButtons mobile={true} /> */}
                        </>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

const Hamburger = ({ open }: any) => {
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


const ActionButtons = ({ mobile }: any) => {
    return (
        <div
            className={cx(
                mobile ? "flex gap-3 mt-2" : "hidden mx-3 gap-3 ml-12 lg:flex"
            )}>
            <Link href="/contact"
                className={`globalButton px-5 py-1.5 text-gray-500 rounded-md font-semibold `} style={{
                    backgroundColor: 'var(--global-green-primary)',
                    color: '#fff',
                    border: 'none',
                    fontSize: 15
                }}>
                Book a demo
            </Link>
        </div>
    );
};
