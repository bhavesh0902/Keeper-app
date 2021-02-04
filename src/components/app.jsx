import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import AddNote from "./addNote";
import notesObject from "../notes.js"

function App() {
	return (
		<div>
			<Header />
			<AddNote />
			{notesObject.map(obj =>
				<Note
					key={obj.key}
					title={obj.title}
					content={obj.content} />
			)}
			<Footer />
		</div>
	);
};

export default App;