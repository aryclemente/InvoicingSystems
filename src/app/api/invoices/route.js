import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const supabase = createServerComponentClient({ cookies });

  const data = await supabase.from("Invoice").select();

  return NextResponse.json(data);
};
