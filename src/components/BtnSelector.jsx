export default function BtnSelector({ isActive, children, changeActive, id }) {
	return (
		<button
			onClick={() => {
				changeActive(id);
			}}
			className={`w-28 h-10 ${
				isActive ? "bg-gradient-to-t from-mainColor to-secColor" : ""
			} rounded-full`}
		>
			{children}
		</button>
	);
}
