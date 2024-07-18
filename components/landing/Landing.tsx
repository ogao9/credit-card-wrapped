import Image from "next/image";
import FileUpload from "./FileUpload";
import { DataFormat } from "@/lib/interfaces";

export default function Landing({setData, setUploaded} : {setData: (data: DataFormat) => void, setUploaded: (uploaded: boolean) => void}){
    return(
        <main className="p-4 my-4">
			<h1 className="text-2xl font-semibold mb-4 mt-4">
				Credit Card Wrapped
			</h1>
			<p className="text-lg text-gray-600 mb-4">
				Your credit card transaction history wrapped
			</p>
			<Image
				src="/cc-wrapped.png"
				alt="Credit card and data abstract illustration"
				className="rounded-xl"
				width={384}
				height={384}
				priority
			/>
			<FileUpload setData={setData} setUploaded={setUploaded}/>
		</main>
    )
}