import React from "react";
import Footer from "../GeneralComponents/Footer";
import Header from "../GeneralComponents/Header";

const CreateResumePage = () => {
	// Create a new Blob object with the file content
	// const fileContent = "This is the content of my file.";
	// const blob = new Blob([fileContent], { type: "text/plain" });

	// // Create a new File object with the Blob object and file name
	// const fileName = "myFile.docx";
	// const file = new File([blob], fileName, { type: "text/plain" });

	// // Create a new URL object to create a download link for the file
	// const url = URL.createObjectURL(file);

	// // Create a new anchor tag with the download link and click it to download the file
	// const downloadLink = document.createElement("a");
	// downloadLink.href = url;
	// downloadLink.download = fileName;
	// downloadLink.click();
	return (
		<React.Fragment>
			<Header />
			<div>CreateResumePage</div>
			<Footer />
		</React.Fragment>
	);
};

export default CreateResumePage;