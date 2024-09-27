import { TfiSearch } from "react-icons/tfi";

export default function SearchList() {
	return (
		
			<form className="bg-secBg rounded-full text-white/70 p-1.5 flex justify-between items-center w-full">
				<input
					type="text"
					name=""
					id=""
                    placeholder="جستجو در لیست...."
					className="bg-transparent w-full outline-none px-4 text-sm"
				/>
				<button className="bg-gradient-to-t from-mainColor to-secColor text-white p-2 rounded-full">
					<TfiSearch />
				</button>
			</form>
		
	);
}
