
const express = require('express');
const productRoutes=require('./app/product/route')
const cartRoutes=require('./app/cart/route')
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.json({
        message: 'Salsabeel Gamal Issa dddd'
    });
});
app.use("/cart", cartRoutes);
app.use("/product", productRoutes);




app.use('/files', express.static("files"));
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Application is running on ${port}`);
});
require('./config/mongoose')(app);

