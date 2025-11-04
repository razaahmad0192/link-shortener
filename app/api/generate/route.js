import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log(body);

    const client = await clientPromise;
    const db = client.db("fitlinks");
    const collection = db.collection("url");

    // Check if the alias exists
    const doc = await collection.findOne({ alias: body.alias });
    if (doc) {
      return new Response(
        JSON.stringify({ success: false, error: true, message: "Alias already exists!" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await collection.insertOne({
      url: body.url,
      alias: body.alias,
    });

    return new Response(
      JSON.stringify({ success: true, error: false, message: "URL shortened successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: true, message: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
