import { GoCheck, GoPencil, GoTrash } from "react-icons/go";

export default function Cart({ isDown }) {
	const now = new Date();
	const day = now.getDate();
	const month = now.getMonth();
	const year = now.getFullYear();
	return (
		<div className="bg-secBg rounded-3xl p-4 flex items-center justify-between">
			<div className="flex gap-4 items-baseline">
				<p>TITLE</p>
				<figcaption className="text-slate-400 text-[12px]">{`${day} / ${month} / ${year}`}</figcaption>
			</div>
			<div className="flex gap-5">
				<button
					className={`${
						isDown ? "bg-teal-600" : "bg-white/20"
					} rounded-full p-2 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] `}
				>
					<GoCheck />
				</button>
				<button className=" hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] bg-white/20 rounded-full p-2">
					<GoPencil />
				</button>
				<button className=" hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] bg-gradient-to-t from-mainColor to-secColor rounded-full p-2">
					<GoTrash />
				</button>
			</div>
		</div>
	);
}
