import Image from "next/image";
import FileUpload from "./FileUpload";

export default function Landing({setData, setUploaded} : {setData: (data: object) => void, setUploaded: (uploaded: boolean) => void}){
    return(
        <main className="border rounded-xl px-4 my-4 py-4">
			<h1 className="text-2xl font-semibold mb-4 mt-4">
				Credit Card Wrapped
			</h1>
			<p className="text-lg text-gray-600 mb-4">
				Your credit card transaction history wrapped
			</p>
			<Image
				src="/cc-wrapped.png"
				alt="Credit Card"
				className="rounded-xl"
				width={400}
				height={400}
				priority
			/>
			<FileUpload setData={setData} setUploaded={setUploaded}/>
		</main>
    )
}