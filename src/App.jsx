import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import Cart from "./components/Cart";
import SearchList from "./components/SearchList";
import Selector from "./components/Selector";

function App() {
    const [todos , setTodos] = useState([]);

    function changeTodos(todo) {
        setTodos(todo)
    }

    useEffect(() => {
        console.log();
        let myTodo = JSON.parse(localStorage.getItem("todos"))
        if(myTodo){
            console.log(myTodo);
            changeTodos(myTodo)
        }else if(todos.length>0){
            localStorage.setItem("todos", JSON.stringify(todos))
            console.log("object has changed");
        }
        console.log(todos);
    },[])

	return (
		<div className="text-white container max-w-[1400px] font-dana">
			<div className="flex my-5 items-center justify-between gap-4 max-xmd:flex-col">
				<SearchList />
				<Selector />
			</div>
            <div className="container w-full h-0.5 bg-secBg rounded-full my-2"></div>

            <h2 className="text-3xl font-danaBlack text-gradient flex place-content-center mt-7 mb-4">لیست انجام کار</h2>

            <AddTodo changeTodos={changeTodos} todo={todos} />

			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
				{todos.map(item => (
                    <Cart key={item.id} title={item.title} date={item.date} isDown={item.isDown} id={item.id} />
                ))}
			</div>
		</div>
	);
}

export default App;
