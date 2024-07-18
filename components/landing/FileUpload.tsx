"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataFormat } from "@/lib/interfaces";

const FileUpload = ({
	setData,
	setUploaded,
}: {
	setData: (data: DataFormat) => void;
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
			formData.append("file", file);
		}

		fetch("https://cc-wrapped-api.onrender.com/api/upload", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				setData(data);
				setUploaded(true);
			})
			.catch((error) => {
				// TODO: might need to retry because API goes to sleep with inactivity
				console.error("Error uploading file:", error);
			});
	};

	return (
		<div className="mt-8">
			<Input type="file" onChange={handleFileChange} className="cursor-pointer" />
			<p className="ml-2 mt-1 text-xs text-slate-700">Files supported: CSV</p>
			<Button onClick={handleUpload} className="mt-4">Upload Data</Button>
		</div>
	);
};

export default FileUpload;
