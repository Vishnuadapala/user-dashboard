import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY");

    const response = await fetch(
      `${supabaseUrl}/rest/v1/users?select=*`,
      {
        headers: {
          "apikey": supabaseKey!,
          "Authorization": `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    const users = await response.json();

    const formattedUsers = users.map((user: any) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: {
        street: user.address_street,
        city: user.address_city,
      },
      company: {
        name: user.company_name,
      },
    }));

    return new Response(JSON.stringify(formattedUsers), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch users", details: error.message }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
        status: 500,
      }
    );
  }
});
