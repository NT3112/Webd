const router = require("express").Router()
const multer = require("multer")

const Listing = require("../models/Listing")
const User = require("../models/User")

const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,"public/uploads/")
    },
    filename: function(req,file,cb) {
        cb(null , file.originalname);
    },
});

const upload = multer({ storage })

router.post("/create",upload.array("listingPhotos"), async(req,res) => {
    console.log("hi")
    try{
        const { creator, category, type, streetAddress, aptSuite, city, province, country, guestCount, bedroomCount, bedCount, bathroomCount, amenities, title, description, highlight, highlightDesc, price} = req.body

        const listingPhotos = req.files
        if(!listingPhotos) {
            return res.status(400).send("No file uploaded")
        }

        const listingPhotoPaths = listingPhotos.map((file) => file.path)

        const newListing = new Listing({
            creator,
            category,
            type,
            streetAddress, aptSuite, city, province, country, guestCount, bedroomCount, bedCount, bathroomCount, amenities, listingPhotoPaths, title, description, highlight, highlightDesc, price 
    })
    await newListing.save()
    console.log("hello")
    res.status(200).json(newListing)
    } catch (err) {
        res.status(409).json({ message : "Failed to create a listing", error: err.message})
        console.log(err)
    }
})


router.get("/", async(req,res) => {
    const qCategory = req.query.category
    try{
        let listings
        if(qCategory) {
            listings = await Listing.find({ category: qCategory }).populate("creator")
        } else{
            listings = await Listing.find().populate("creator")
        }

        res.status(200).json(listings)
    } catch (err) {
        res.status(404).json({ message : "Failed to fetch a listing", error: err.message})
        console.log(err)
    }
})


router.get('/:listingId', async (req, res) => {
    try {
        const {listingId} = req.params;
        const listing = await listing.findById(listingId);
        res.status(202).json(listing)
    } catch (err) {
        res.status(404).json({message: 'listing not found', error: err.message})
    }
})


module.exports = router ;