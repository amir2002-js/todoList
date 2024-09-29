import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaTelegram } from "react-icons/fa";

export default function Footer() {
	return (
		<div>
			<div className="container text-sm h-fit mt-32 flex justify-between w-full gapy-32 flex-wrap gap-x-5">
				{/* gmail */}
				<a
					href="https://github.com/amir2002-js"
					rel="noopener noreferrer"
					target="_blank"
					className="w-20"
				>
					<span className="relative group">
						<div
							className={`absolute bottom-0 group-hover:shadow-[0_0_30px_rgba(255,0,0,0.4)] w-20 h-20 rounded group-hover:bg-red-500/20 transform-z`}
						></div>
						<div
							className={`absolute bottom-0 group-hover:shadow-[0_0_30px_rgba(255,0,0,0.4)] group-hover:bottom-3 transition-all duration-300 w-20 h-20 rounded group-hover:bg-red-500/35 transform-z`}
						></div>
						<div
							className={`absolute bottom-0 group-hover:shadow-[0_0_30px_rgba(255,0,0,0.4)] group-hover:bottom-6 transition-all duration-300 w-20 h-20 rounded group-hover:bg-red-500/75 transform-z`}
						></div>
						<div
							className={`absolute bottom-0 group-hover:shadow-[0_0_30px_rgba(255,0,0,0.4)] group-hover:bottom-9 transition-all duration-300 w-20 h-20 rounded group-hover:bg-red-500 transform-z flex justify-center items-center`}
						>
							<BiLogoGmail className="text-3xl" />
						</div>
					</span>
				</a>

				{/* github */}
				<a
					href="https://github.com/amir2002-js/todoList"
					rel="noopener noreferrer"
					target="_blank"
					className="w-20"
				>
					<span className="relative group">
						<div
							className={`absolute bottom-0 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] w-20 h-20 rounded group-hover:bg-black/5 transform-z`}
						></div>
						<div
							className={`absolute bottom-0 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:bottom-3 transition-all duration-300 w-20 h-20 rounded group-hover:bg-black/35 transform-z`}
						></div>
						<div
							className={`absolute bottom-0 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:bottom-6 transition-all duration-300 w-20 h-20 rounded group-hover:bg-black/75 transform-z`}
						></div>
						<div
							className={`absolute bottom-0 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:bottom-9 transition-all duration-300 w-20 h-20 rounded group-hover:bg-black transform-z flex justify-center items-center`}
						>
							<FaGithub className="text-3xl" />
						</div>
					</span>
				</a>

				{/* telegram */}
				<a
					href="https://t.me/programming_jsx"
					rel="noopener noreferrer"
					target="_blank"
					className="w-20"
				>
					<span className="relative group">
						<div
							className={`absolute bottom-0 group-hover:shadow-[0_0_30px_rgba(0,0,255,0.3)] w-20 h-20 group-hover:bg-blue-500/10 transform-z`}
						></div>
						<div
							className={`absolute bottom-0 group-hover:shadow-[0_0_30px_rgba(0,0,255,0.3)] group-hover:bottom-3 transition-all duration-300 w-20 h-20 rounded group-hover:bg-blue-500/35 transform-z`}
						></div>
						<div
							className={`absolute bottom-0 group-hover:shadow-[0_0_30px_rgba(0,0,255,0.3)] group-hover:bottom-6 transition-all duration-300 w-20 h-20 rounded group-hover:bg-blue-500/75 transform-z`}
						></div>
						<div
							className={`absolute bottom-0 group-hover:shadow-[0_0_30px_rgba(0,0,255,0.3)] group-hover:bottom-9 transition-all duration-300 w-20 h-20 rounded group-hover:bg-blue-500 transform-z flex justify-center items-center`}
						>
							<FaTelegram className="text-3xl" />
						</div>
					</span>
				</a>
			</div>
			<div className="text-center text-white/30 my-4 font-Harmattan">
				<p>
					Designed and Coded by{" "}
					<a
						href="https://github.com/amir2002-js"
						rel="noopener noreferrer"
						target="_blank"
						className="hover:text-white drop-shadow-lg shadow-white underline"
					>
						@amir2002-js
					</a>{" "}
					in 2024
				</p>
			</div>
		</div>
	);
}
