import img10 from "../images/img10.jpeg";
import img6 from "../images/img6.jpeg";
import img7 from "../images/img7.jpeg";
import img9 from "../images/img9.jpeg";

const images = [
	{
		id: 1,
		src: img6,
		aspectRatio: "aspect-[7/5]",
		width: "w-full sm:w-[37rem]",
	},
	{
		id: 2,
		src: img10,
		aspectRatio: "aspect-[4/3]",
		width: "w-full sm:w-[24rem]",
		height: "h-auto sm:h-[30rem]",
	},
	{
		id: 3,
		src: img7,
		aspectRatio: "aspect-[6/5]",
		width: "w-full sm:w-[37rem]",
	},
	{
		id: 4,
		src: img9,
		aspectRatio: "aspect-[4/3]",
		width: "w-full sm:w-[24rem]",
	},
];

export default function Photos() {
	return (
		<div id="photos" className="overflow-hidden py-32">
			<div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
					<div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Photos
						</h2>
						<p className="mt-6 text-xl leading-8 text-gray-600">
							In addition to what I like, I also greatly enjoy photography,
							which lets me take beautiful photos through a lens.
						</p>
					</div>
					<div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
						{images.map((image) => (
							<div
								key={image.id}
								className="w-full sm:w-auto flex-auto lg:w-auto lg:flex-none lg:self-end"
							>
								<img
									alt=""
									src={image.src}
									className={`${image.aspectRatio} ${image.width} ${image.height} max-w-none rounded-2xl bg-gray-50 object-cover`}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
