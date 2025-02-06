import express from 'express'
import { ListingDB } from '../DB/models/AllListing.js'
import { Review } from '../DB/models/Review.js'
const router = express.Router()


// Reviews post route
router.post('/:id/reviews', async (req, res) =>{
    let listing = await ListingDB.findById(req.params.id)
    let newReview = new Review(req.body.review)
    listing.reviews.push(newReview)
    await newReview.save()
    await listing.save()
    res.redirect(`/api/listings/${listing._id}`)
    })
    
    // Reviews Delete Route
    router.delete('/:id/review/:reviewId', async(req, res, next) =>{
      try {
        let {id, reviewId} = req.params
        await ListingDB.findByIdAndUpdate(id, {$pull : {reviews: reviewId}})
        await Review.findByIdAndDelete(reviewId)
        res.redirect(`/api/listings/${id}`)
      } catch (error) {
        console.log(error)
      }
    })
    
    export default router;