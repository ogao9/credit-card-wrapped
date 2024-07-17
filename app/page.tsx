"use client";
import { useState } from "react";
import Landing from "../components/landing/Landing";
import Results from "@/components/results/Results";
import { DataFormat } from "@/lib/interfaces";

export default function Home() {
	const [uploaded, setUploaded] = useState<boolean>(false);
	const [data, setData] = useState<DataFormat>({} as DataFormat);

	return (
		<>
			{uploaded ? <Results data={data}/> : <Landing setData={setData} setUploaded={setUploaded} />}
		</>
	);
}
