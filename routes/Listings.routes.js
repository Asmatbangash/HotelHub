import expess from "express";
import { ListingDB } from "../DB/models/AllListing.js";
const router = expess.Router();

// all listings route
router.get("/", async (req, res) => {
  let allListings = await ListingDB.find({});
  res.render("allListings/index.ejs", { allListings });
});

// new listing form route
router.get("/new-listing", (req, res) => {
  res.render("allListings/newListing.ejs");
});

// indivitaul show route
router.get("/:id", async (req, res) => {
  let { id } = req.params;
  let listing = await ListingDB.findById(id).populate("reviews");
  res.render("allListings/showDetail.ejs", { listing });
});

// new listing route
router.post("/", async(req, res) => {
  try {
    let { title, desc, image, price, location, country } = req.body;
    let newAdditionListing = await new ListingDB({
      title: title,
      desc: desc,
      image: image,
      price: price,
      Location: location,
      country: country,
    });
    newAdditionListing
      .save()
      .then((res) => console.log("your new addition listing is save in db."));
    res.redirect("/api/listings");
  } catch (err) {
    console.log("something went wrong in post");
  }
});

// update route form
router.get("/:id/edit", async (req, res) => {
  let { id } = req.params;
  let listing = await ListingDB.findById(id);
  res.render("allListings/edit.ejs", { listing });
});

// listing updating route
router.put("/:id", async (req, res) => {
  let { id } = req.params;
  await ListingDB.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/api/listings/${id}`);
});

// listing deleting route
router.delete("/:id", async (req, res) => {
  let { id } = req.params;
  await ListingDB.findByIdAndDelete(id);
  res.redirect("/api/listings");
});

export default router;