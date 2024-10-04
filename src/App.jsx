import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import SearchList from "./components/SearchList";
import Selector from "./components/Selector";
import Footer from "./components/Footer";
import FilteredTodo from "./components/FilteredTodo";

function App() {
	const selectorItem = [
		{ title: "همه", id: 0, filterBy: true },
		{ title: "انجام شده", id: 1, filterBy: "isDown" },
		{ title: "انجام نشده", id: 2, filterBy: "isNotDown" },
		{ title: "آخرین ها", id: 3, filterBy: "today" },
	];

	const [searchWords, setSearchWords] = useState("");

	const [whoIsActive, setWhoIsActive] = useState(0);

	const [todos, setTodos] = useState([]);

	function changeTodos(todo) {
		setTodos(todo);
	}

	useEffect(() => {
		console.log();
		let myTodo = JSON.parse(localStorage.getItem("todos"));
		if (myTodo) {
			changeTodos(myTodo);
		} else if (todos.length > 0) {
			localStorage.setItem("todos", JSON.stringify(todos));
			console.log("object has changed");
		}
	}, []);

	return (
		<div className="text-white container max-w-[1400px] font-dana flex flex-col justify-between min-h-svh">
			<main>
				<div className="flex my-5 items-center justify-between gap-4 max-xmd:flex-col">
					<SearchList
						whoIsActive={whoIsActive}
						setWhoIsActive={setWhoIsActive}
						setSearchWords={setSearchWords}
					/>

					<Selector
						selectorItem={selectorItem}
						whoIsActive={whoIsActive}
						setWhoIsActive={setWhoIsActive}
					/>
				</div>
				<div className="container w-full h-0.5 bg-secBg rounded-full my-2"></div>

				<h2 className="text-[36px] font-danaBlack text-gradient flex place-content-center mt-7 mb-4">
					لیست انجام کار
				</h2>

				<AddTodo changeTodos={changeTodos} todo={todos} />

				<FilteredTodo
					changeTodos={changeTodos}
					todos={todos}
					whoIsActive={whoIsActive}
					searchWords={searchWords}
				/>
			</main>

			<Footer />
		</div>
	);
}

export default App;
