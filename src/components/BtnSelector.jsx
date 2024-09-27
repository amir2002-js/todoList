export default function BtnSelector({ isActive, children, changeActive, id }) {
	return (
		<button
			onClick={() => changeActive(id)}
			className={`w-28 h-10 ${
				isActive
					? "shadow-[0_0_15px_rgba(255,255,255,0.4)] text-center bg-gradient-to-t from-mainColor to-secColo"
					: ""
			}r rounded-full`}
		>
			{children}
		</button>
	);
}
