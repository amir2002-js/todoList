import Cart from "./Cart";

export default function ShowTodo({ todos, changeTodos, filteredTodos }) {
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
