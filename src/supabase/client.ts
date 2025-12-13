import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPBASE_URL!,
    process.env.NEXT_PUBLIC_SUPBASE_ANON_KEY!
)