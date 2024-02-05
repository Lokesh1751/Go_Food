const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

router.post("/addreview", async (req, res) => {
  try {
    await Review.create({
      name: req.body.name,
      rating: req.body.rating,
      review: req.body.review,
    });
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: "Error Adding review" });
  
  }
});
router.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Error fetching reviews' });
  }
});
module.exports=router;
