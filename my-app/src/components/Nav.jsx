import { AppBar } from "@mui/material";
import DarkModeSwitch from "./DarkModeSwitch";

const Nav = () => {
	return (
		<AppBar position="static">
			<div className="container d-flex justify-content-between align-items-center py-2">
				<h1 className="title">Title</h1>
				<div className="score">
					<h4 className="text-center">Score</h4>
					<h4>9999</h4>
				</div>
				<div className="Best">
					<h4 className="text-center">Best</h4>
					<h4>9999</h4>
				</div>
				<DarkModeSwitch />
			</div>
		</AppBar>
	);
};
export default Nav;
