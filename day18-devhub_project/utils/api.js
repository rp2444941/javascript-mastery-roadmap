export async function getUserProfile(username) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) throw new Error('User not found');
    return await res.json();
  } catch (err) {
    alert(err.message);
  }
}
