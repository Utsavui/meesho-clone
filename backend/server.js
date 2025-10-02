import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = 5000;

app.use(cors());

const places = JSON.parse(fs.readFileSync("data/places.json", "utf-8"));

// ✅ Get all or search places
app.get("/api/places", (req, res) => {
  const { search } = req.query;

  if (search) {
    const filtered = places.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    return res.json(filtered);
  }

  res.json(places);
});

// Get random 5 places
app.get("/api/places/random", (req, res) => {
  const shuffled = [...places].sort(() => 0.5 - Math.random());
  res.json(shuffled.slice(0, 5)); // sirf 5 places bhejenge
});


// ✅ Get random places (for homepage)
app.get("/api/places/random", (req, res) => {
  const shuffled = [...places].sort(() => 0.5 - Math.random());
  const randomPlaces = shuffled.slice(0, 6); // 6 random places
  res.json(randomPlaces);
});

app.listen(PORT, () =>
  console.log(`Backend running at http://localhost:${PORT}`)
);
