"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import img1 from "../images/img1.jpeg";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import AboutMe from "./AboutMe";
import Blog from "./Blog";
import Photos from "./Photos";
import Footer from "./Footer";

const navigation = [
	{ name: "About", href: "#about" },
	{ name: "Blog", href: "#blog" },
	{ name: "Photos", href: "#photos" },
	{ name: "Footer", href: "#footer" },
];

export default function Example() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const navbarControls = useAnimation();
	const imageControls = useAnimation();
	const heroControls = useAnimation();
	const paragraphControls = useAnimation();
	const multimedia1Controls = useAnimation();
	const multimedia2Controls = useAnimation();
	const multimedia3Controls = useAnimation();

	useEffect(() => {
		const animateSequence = async () => {
			await navbarControls.start({
				y: 0,
				opacity: 1,
				transition: { duration: 1 },
			});
			await imageControls.start({
				x: 0,
				opacity: 1,
				transition: { duration: 1.5, delay: 0.5 },
			});
			await heroControls.start({
				opacity: 1,
				y: 0,
				transition: { duration: 1.5, delay: 0.5 },
			});
			await paragraphControls.start({
				x: 0,
				opacity: 1,
				transition: { duration: 1.5, delay: 0.4 },
			});
			await multimedia1Controls.start({
				opacity: 1,
				y: 0,
				transition: { duration: 0.3, delay: 0.3 },
			});
			await multimedia2Controls.start({
				opacity: 1,
				y: 0,
				transition: { duration: 0.3, delay: 0.2 },
			});
			await multimedia3Controls.start({
				opacity: 1,
				y: 0,
				transition: { duration: 0.3, delay: 0.1 },
			});
		};

		animateSequence();
	}, [
		navbarControls,
		imageControls,
		heroControls,
		paragraphControls,
		multimedia1Controls,
		multimedia2Controls,
		multimedia3Controls,
	]);

	return (
		<div className="bg-white">
			<motion.header
				className="absolute inset-x-0 top-0 z-50"
				initial={{ y: -100, opacity: 0 }}
				animate={navbarControls}
			>
				<div className="mx-auto max-w-7xl">
					<div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
						<nav
							aria-label="Global"
							className="flex items-center justify-between lg:justify-start"
						>
							<a href="/#" className="-m-1.5 p-1.5">
								<span className="sr-only">Your Company</span>
								<img
									alt="Your Company"
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
									className="h-8 w-auto"
								/>
							</a>
							<button
								type="button"
								onClick={() => setMobileMenuOpen(true)}
								className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
							>
								<span className="sr-only">Open main menu</span>
								<Bars3Icon aria-hidden="true" className="h-6 w-6" />
							</button>
							<div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="text-sm font-semibold leading-6 text-gray-900  hover:shadow-lg hover:shadow-pink-500 hover:bg-pink-400 px-5 py-2 hover:text-white rounded-lg"
									>
										{item.name}
									</a>
								))}
							</div>
						</nav>
					</div>
				</div>{" "}
				<Dialog
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
					className="lg:hidden"
				>
					<div className="fixed inset-0 z-50" />
					<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<a href="/#" className="-m-1.5 p-1.5">
								<span className="sr-only">Your Company</span>
								<img
									alt=""
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
									className="h-8 w-auto"
								/>
							</a>
							<button
								type="button"
								onClick={() => setMobileMenuOpen(false)}
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon aria-hidden="true" className="h-6 w-6" />
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-pink-800"
										>
											{item.name}
										</a>
									))}
								</div>
							</div>
						</div>
					</DialogPanel>
				</Dialog>
			</motion.header>

			<div className="relative">
				<div className="mx-auto max-w-7xl">
					<div className="relative z-10 lg:w-full -mt-16 lg:max-w-2xl">
						<svg
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
							aria-hidden="true"
							className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
						>
							<polygon points="0,0 90,0 50,100 0,100" />
						</svg>

						<motion.div
							id="hero"
							className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0"
							initial={{ opacity: 0, y: 50 }}
							animate={heroControls}
						>
							<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
								<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center font-serif">
									Welcome to My Personal Website
								</h1>
								<h2 className="mt-10 text-3xl font-bold text-pink-600">
									<span className="text-sm text-gray-500">Hi,</span> Im Genesis
									Sullano
								</h2>
								<motion.p
									id="paragraphControls"
									className="mt-6 text-lg leading-8 text-gray-600"
									initial={{ opacity: 0, x: -50 }}
									animate={paragraphControls}
								>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
									atque ad dicta architecto aliquam voluptate, culpa delectus
									doloribus ex veniam quasi, dolores, necessitatibus corporis
									commodi accusantium sequi praesentium rerum a.
								</motion.p>

								<div id="multimedia" className="mt-5 flex items-center gap-x-6">
									<motion.a
										href="https://www.facebook.com/genesis.sullano" // Replace with your Facebook link
										target="_blank"
										rel="noopener noreferrer"
										initial={{ opacity: 0 }}
										animate={multimedia1Controls}
									>
										<motion.div
											className="relative flex items-center justify-center rounded-full border-pink-400 border-2 h-12 w-12 hover:cursor-pointer hover:bg-pink-100 shadow-md shadow-pink-300"
											whileHover={{ scale: 1.2 }}
											transition={{ duration: 0.3 }}
										>
											<FaFacebookF className="h-6 w-6 text-pink-600" />
										</motion.div>
									</motion.a>

									<motion.a
										href="https://www.instagram.com" // Replace with your Instagram link
										target="_blank"
										rel="noopener noreferrer"
										initial={{ opacity: 0 }}
										animate={multimedia2Controls}
									>
										<motion.div
											className="relative flex items-center justify-center rounded-full border-pink-400 border-2 h-12 w-12 hover:cursor-pointer hover:bg-pink-100 shadow-md shadow-pink-300"
											whileHover={{ scale: 1.2 }}
											transition={{ duration: 0.3 }}
										>
											<FaInstagram className="h-6 w-6 text-pink-600" />
										</motion.div>
									</motion.a>

									<motion.a
										href="mailto:your-email@example.com" // Replace with your email address
										target="_blank"
										rel="noopener noreferrer"
										initial={{ opacity: 0 }}
										animate={multimedia3Controls}
									>
										<motion.div
											className="relative flex items-center justify-center rounded-full border-pink-400 border-2 h-12 w-12 hover:cursor-pointer hover:bg-pink-100 shadow-md shadow-pink-300"
											whileHover={{ scale: 1.2 }}
											transition={{ duration: 0.3 }}
										>
											<FaEnvelope className="h-6 w-6 text-pink-600" />
										</motion.div>
									</motion.a>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
				<motion.div
					className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
					initial={{ x: "100%", opacity: 0 }}
					animate={imageControls}
				>
					<img
						alt=""
						src={img1}
						className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
					/>
				</motion.div>
			</div>
			<AboutMe />

			<Blog />

			<Photos />

			<Footer />
		</div>
	);
}
