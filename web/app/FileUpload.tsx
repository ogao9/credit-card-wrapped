"use client";
import { useState } from "react";

const FileUpload = () => {
	const [file, setFile] = useState<File | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e?.target.files?.[0] || null;
		setFile(selectedFile);
	};

	const handleUpload = () => {
		const formData = new FormData();
		if (file) {
			console.log("file", file);
			formData.append("file", file);
		}

		fetch("/api/upload", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				// Handle the response from the Flask backend
				console.log(data);
        
			})
			.catch((error) => {
				console.error("Error uploading file:", error);
			});
	};

	return (
		<div className="mt-8">
			<input type="file" onChange={handleFileChange} />
			<button
				onClick={handleUpload}
				className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4"
			>
				Upload Data
			</button>
		</div>
	);
};

export default FileUpload;
