import { useState } from "react";
import BtnSelector from "./BtnSelector";

export default function Selector() {
	const selectorItem = [
		{ title: "همه", id: 0 },
		{ title: "انجام شده", id: 1 },
		{ title: "انجام نشده", id: 2 },
		{ title: "تاریخ امروز", id: 3 },
	];

	const [whoIsActive, setWhoIsActive] = useState(0);

	function changeActive(id) {
		setWhoIsActive(id);
	}

	return (
		<div className="flex justify-around items-center gap-5">
			{selectorItem.map((item) => (
				<BtnSelector
					key={item.id}
					isActive={item.id == whoIsActive}
					changeActive={changeActive}
					id={item.id}
				>
					{item.title}
				</BtnSelector>
			))}
		</div>
	);
}
