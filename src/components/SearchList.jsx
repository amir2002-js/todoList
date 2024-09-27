import { TfiSearch } from "react-icons/tfi";

export default function SearchList() {
	return (
		<div>
			<form className="bg-secBg rounded-full text-white/70 p-1 w-96 flex justify-between items-center">
				<input
					type="text"
					name=""
					id=""
					className="bg-transparent w-full outline-none px-4"
				/>
				<button className="bg-gradient-to-t from-mainColor to-secColor text-white p-2 rounded-full">
					<TfiSearch />
				</button>
			</form>
		</div>
	);
}
