import clientPromise from "@/lib/mongodb";

export async function POST(req) {
    try {
        // Parse the incoming request body
        const body = await req.json();
        console.log("Request Body:", body);

        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db("fitlinks");
        const collection = db.collection("url");

        // Check if the alias already exists
        const existingDoc = await collection.findOne({ alias: body.alias });
        if (existingDoc) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: true,
                    message: "Alias already exists!"
                }),
                { status: 409, headers: { "Content-Type": "application/json" } }
            );
        }

        // Insert the new URL with alias
        const result = await collection.insertOne({
            url: body.url,
            alias: body.alias
        });

        return new Response(
            JSON.stringify({
                success: true,
                error: false,
                message: "URL shortened successfully",
                id: result.insertedId
            }),
            { status: 201, headers: { "Content-Type": "application/json" } }
        );

    } catch (error) {
        console.error("Error in /api/generate:", error);

        return new Response(
            JSON.stringify({
                success: false,
                error: true,
                message: "Internal Server Error"
            }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
