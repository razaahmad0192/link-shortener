import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"




export default async function Page({ params }) {
    const { alias } = await params

    const client = await clientPromise;
    const db = client.db("fitlinks");
    const collection = db.collection("url")


    const doc = await collection.findOne({alias: alias})
    console.log(doc)
    if(doc){
        redirect(doc.url)
    }
    else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }

    return <div>My Post: {alias}</div>
}