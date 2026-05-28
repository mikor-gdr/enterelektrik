import { query } from "@/lib/db";

export async function GET(request) {
    const jkb = await query({
        query: "SELECT * FROM jkb",
        values: [],
    });

    let data = JSON.stringify(jkb);
    return new Response(data, {
        status: 200,
    });
}

export async function POST(request) {

    const { nama,alamat,hp } = await request.json();
    const updatejkb = await query({
        query: "INSERT INTO jkb (Nama,alamat, hp) VALUES (?, ?, ? )",
        values: [nama, alamat, hp],
    });
    const result = updatejkb.affectedRows;
    let message = "";
    if (result) {
        message = "success";
    } else {
        message = "error";
    }
    const jkb = {
        Nama: nama,
    };
    return new Response(JSON.stringify({
        message: message,
        status: 200,
        jkb: jkb
    }));
}

export async function PUT(request) {

    const { id, nama,alamat,hp } = await request.json();
    const updateProducts = await query({
        query: "UPDATE jkb SET Name = ?, alamat = ?, hp = ? WHERE id = ?",
        values: [nama,alamat,hp, id],
    });

    const result = updateProducts.affectedRows;
    let message = result ? "success" : "error";

    const product = {
        id: id,
        Nama: nama,
    };

    return new Response(JSON.stringify({
        message: message,
        status: 200,
        product: product
    }), { headers: { 'Content-Type': 'application/json' } });

}


export async function DELETE(request) {

    const { id } = await request.json();
    const deleteUser = await query({
        query: "DELETE FROM jkb WHERE id = ?",
        values: [id],
    });
    const result = deleteUser.affectedRows;
    let message = "";
    if (result) {
        message = "success";
    } else {
        message = "error";
    }
    const product = {
        id: id,
    };
    return new Response(JSON.stringify({
        message: message,
        status: 200,
        product: product
    }));

}