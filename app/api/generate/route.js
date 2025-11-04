import clientPromise from "@/lib/mongodb";

export async function POST(req) {
    const body = await req.json();
    console.log(body);

    const client = await clientPromise;
    const db = client.db("fitlinks");
    const collection = db.collection("url");

    // Check if the short url exists
    const doc = await collection.findOne({ alias: body.alias });
    if (doc) {
        return Response.json({
            success: false,
            error: true,
            message: "URL already exists!"
        });
    }

    const result = await collection.insertOne({
        url: body.url,
        alias: body.alias
    });

    return Response.json({
        success: true,
        error: false,
        message: "Url Shorted Successfully"
    });
}
