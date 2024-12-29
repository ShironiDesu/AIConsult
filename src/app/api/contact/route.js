import { NextResponse } from "next/server";

const hookUrl =
  "https://aiconsult.bitrix24.kz/rest/34/z9i1wret5anhsbb7/crm.deal.add.json";
export async function POST(req) {
  const data = await req.json();
  try {
    const res = await fetch(hookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const answer = await res.json();
    return NextResponse.json(answer);
  } catch (error) {
    console.log("Ошибка при создании сделки", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
