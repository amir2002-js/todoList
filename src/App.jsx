import SearchList from "./components/SearchList";
import Selector from "./components/Selector";

function App() {
	return (
		<div className="text-white container max-w-[1400px] font-dana">
			<div className="flex my-10 items-center justify-between">
				<SearchList />
				<Selector />
			</div>
		</div>
	);
}

export default App;
