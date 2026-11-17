
async function requireAuth() {
  const { data: { session }, error } =
    await supabaseClient.auth.getSession();

  if (error || !session) {
    window.location.href = "login.html";
    return null;
  }

  const { data: profile, error: profileError } =
    await supabaseClient
      .from("profiles")
      .select("role")
      .eq("id", session.user.id)
      .single();

  if (profileError || !profile) {
    await supabaseClient.auth.signOut();
    window.location.href = "login.html";
    return null;
  }

  return {
    user: session.user,
    role: profile.role
  };
}

async function logout() {
  await supabaseClient.auth.signOut();
  window.location.href = "login.html";
}
