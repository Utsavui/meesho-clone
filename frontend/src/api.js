export async function fetchPlaces() {
  const res = await fetch("/api/places");
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to fetch places: ${res.status} ${text}`);
  }
  return res.json();
}
