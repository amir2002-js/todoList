import { useState } from "react";
import BtnSelector from "./BtnSelector";

export default function Selector({selectorItem , whoIsActive , setWhoIsActive}) {

	function changeActive(id) {
		setWhoIsActive(id);
	}

	return (
		<div className="flex justify-around items-center w-full">
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
