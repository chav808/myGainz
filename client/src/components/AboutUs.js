import Header from "./Header";
//import team from "../assets/team.jpg";

const About = () => {
	
	const logoContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2rem",
	fontSize: "0.5rem"
	};
	
	return (
	<>
		<Header />
	
		<div style={logoContainerStyle}>
			<h1> 
			<p>
				Meet the Dream Team!
			</p>
			<p>				
				Hey there! 
				We're an ambitious group of Computer Science students from FIU!
			</p>
			<p>
				From the top moving clockwise, meet:
			</p>
			<p>
				Robbie, our cybersecurity wizard.
			</p>
			<p>
				Rafael, the API wrangler.
			</p>
			<p>
				Ian, the druid of the code.
			</p>
			<p>
				Luis, the hero debugger.
			</p>	
			</h1>
			
		</div>


	</>
	);
}


export default About;