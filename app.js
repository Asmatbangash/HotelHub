import express, { urlencoded } from 'express'
import mongoose from 'mongoose';
const app = express();
import path from 'path'
import methodOverride from 'method-override';
import ejsMate from 'ejs-mate'
import listing from './routes/Listings.routes.js'
import review from './routes/Review.routes.js'
let port = 6060;

app.set('views engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.engine('ejs', ejsMate)
app.use(express.static(path.join('./public')))


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wonderLust');
}

app.get('/', (req, res) =>{
  res.send('server is working')
})

app.use('/api/listings', listing)
app.use('/api/listings', review)

app.listen(port, () =>{
    console.log(`your server is ready on port ${port}`)
})