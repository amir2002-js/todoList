import ShowTodo from "./ShowTodo";

export default function FilteredTodo({
	whoIsActive,
	todos,
	changeTodos,
	searchWords,
}) {
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
				`${new Date().getDate()} / ${new Date().getMonth()} / ${new Date().getFullYear()}`
		);
	} else if (whoIsActive == 5) {
		filteredTodos = todos.filter((item) =>
			item.title.includes(searchWords)
		);
	}

	return (
		<ShowTodo
			todos={todos}
			filteredTodos={filteredTodos}
			changeTodos={changeTodos}
		/>
	);
}
