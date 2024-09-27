import Cart from "./components/Cart";
import SearchList from "./components/SearchList";
import Selector from "./components/Selector";

function App() {
	return (
		<div className="text-white container max-w-[1400px] font-dana">
			<div className="flex my-5 items-center justify-between gap-4 max-xmd:flex-col">
				<SearchList />
				<Selector />
			</div>
            <div className="container w-full h-0.5 bg-secBg rounded-full my-2"></div>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
				<Cart />
				<Cart />
				<Cart />
				<Cart />
				<Cart />
			</div>
		</div>
	);
}

export default App;
