import { GoCheck, GoTrash } from "react-icons/go";

export default function Cart({ isDown, title, date, id, todo, changeTodos }) {
	const now = new Date();
	const day = now.getDay();
	const month = now.getMonth();
	const year = now.getFullYear();
	return (
		<div className="bg-secBg rounded-3xl p-4 flex items-center justify-between">
			<div className="flex flex-col gap-2">
				<p>{title}</p>
				<figcaption className="text-slate-400 text-[12px]">
					{date}
				</figcaption>
			</div>
			<div className="flex gap-3">
				<button
					onClick={() => {
						let myItem = todo.map((i) => {
							if (i.id === id) {
								i.isDown = !i.isDown;
							}
							return i;
						});
						changeTodos(myItem);
					}}
					className={`${
						isDown ? "bg-teal-600" : "bg-white/20"
					} rounded-full p-2 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] `}
				>
					<GoCheck />
				</button>
				<button
					onClick={() => {
						let myItem = todo.filter((i) => {
							return i.id !== id;
						});
						changeTodos(myItem);
					}}
					className=" hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] bg-gradient-to-t from-mainColor to-secColor rounded-full p-2"
				>
					<GoTrash />
				</button>
			</div>
		</div>
	);
}
