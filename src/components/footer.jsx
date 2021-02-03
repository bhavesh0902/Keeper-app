import React from "react";

const currentDate=new Date();
const curretYear=currentDate.getFullYear();

function Footer(){
	return (
		<footer><p>Copyright &copy; {curretYear}</p></footer>
	);
};

export default Footer;