import { useEffect } from "react";
import { TiFolderAdd } from "react-icons/ti";

export default function AddTodo({ changeTodos, todo }) {
	useEffect(() => {
		if (todo.length > 0) {
			localStorage.setItem("todos", JSON.stringify(todo));
		}
	});

	return (
		<>
			<div className="flex place-content-center my-7">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						if (e.target[0].value) {
							const newTodo = {
								title: e.target[0].value,
								id: Date.now(),
								date: `${new Date().getDate()} / ${new Date().getMonth()} / ${new Date().getFullYear()}`,
								isDown: false,
							};

							changeTodos([...todo, newTodo]);
						}
						e.target[0].value = "";
					}}
					action=""
					className="bg-secBg sm:w-2/3 sm:min-w-80 max-sm:w-full max-sm:mx-4  rounded-full text-sm flex justify-between items-center"
				>
					<input
						type="text"
						className="outline-none bg-transparent px-4 py-1.5 w-full"
						placeholder="اضافه کردن به لیست...."
					/>
					<button className="main-btn size-9 flex place-content-center items-center rounded-full flex-shrink-0">
						<TiFolderAdd className="text-xl" />
					</button>
				</form>
			</div>
		</>
	);
}
