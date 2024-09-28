import Cart from "./Cart";

export default function ShowTodo({ todos, changeTodos, whoIsActive }) {
	let filteredTodos;
	if (whoIsActive == 0) {
		filteredTodos = todos;
	} else if (whoIsActive == 1) {
		filteredTodos = todos.filter((item) => item.isDown === true);
	} else if (whoIsActive == 2) {
		filteredTodos = todos.filter((item) => item.isDown === false);
	} else if (whoIsActive == 3) {
		filteredTodos = todos.filter(
			(item) =>
				item.date ===
				`${new Date().getDay()} / ${new Date().getMonth()} / ${new Date().getFullYear()}`
		);
	}

	return (
		<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
			{filteredTodos.map((item) => (
				<Cart
					key={item.id}
					title={item.title}
					date={item.date}
					isDown={item.isDown}
					id={item.id}
					todo={todos}
					changeTodos={changeTodos}
				/>
			))}
		</div>
	);
}
