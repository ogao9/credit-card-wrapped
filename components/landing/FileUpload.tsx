"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FileUpload = ({
	setData,
	setUploaded,
}: {
	setData: (data: object) => void;
	setUploaded: (uploaded: boolean) => void;
}) => {
	const [file, setFile] = useState<File | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e?.target.files?.[0] || null;
		setFile(selectedFile);
	};

	const handleUpload = () => {
		const formData = new FormData();
		if (file) {
			console.log("file uploaded: ", file);
			formData.append("file", file);
		}

		fetch("/api/upload", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("API response: ", data);
				setData(data);
				setUploaded(true);
			})
			.catch((error) => {
				console.error("Error uploading file:", error);
			});
	};

	return (
		<div className="mt-8">
			<Input type="file" onChange={handleFileChange} className="cursor-pointer" />
			<Button onClick={handleUpload} className="mt-4">Upload Data</Button>
		</div>
	);
};

export default FileUpload;
