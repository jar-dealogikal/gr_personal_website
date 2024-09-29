import { CheckCircleIcon } from "@heroicons/react/20/solid";
import img from "../images/img4.jpeg";
const benefits = [
	"Singing",
	"Trading Cryptocurrency",
	"Love coding",
	"Paying Guitar",
	"Cooking and experimenting new recipes",
	"Photography",
];

export default function AboutMe() {
	return (
		<div id="about" className=" py-24 sm:py-32">
			<div className="relative isolate">
				<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
						<img
							alt=""
							src={img}
							className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-[35rem] lg:max-w-sm"
						/>
						<div className="w-full flex-auto">
							<h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
								About Me
							</h2>
							<p className="mt-6 text-lg leading-8 text-gray-500">
								I am Genesis and I am a student in IT at ACLC Mandaue at the
								present time. The pleasure I take in programming leads me to
								learn and utilize several coding languages and tech. Outside of
								what I study, I love to sing and regularly find delight in
								expressing myself through music.Cooking is another love of mine;
								I love experimenting with new recipes in the kitchen. While I
								have some time to myself, I enjoy playing guitar and singing
								sometimes, which seems to me an ideal way to relax. In addition
								to what I like, I also greatly enjoy photography, which lets me
								take beautiful photos through a lens. My entry into trading
								cryptocurrency has unveiled to me the context of finance and
								investment. My curiosity drives me to learn constantly, whether
								that’s a new ability or an alternative view; I think that for
								continuous growth, personal and professional, learning is
								essential.
							</p>
							<ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-gray-500 sm:grid-cols-2">
								{benefits.map((benefit) => (
									<li key={benefit} className="flex gap-x-3">
										<CheckCircleIcon
											aria-hidden="true"
											className="h-7 w-5 flex-none"
										/>
										{benefit}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div
					aria-hidden="true"
					className="absolute inset-x-0 -top-14 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
				>
					<div
						style={{
							clipPath:
								"polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
						}}
						className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
					/>
				</div>
			</div>
		</div>
	);
}
