const app = require("express")();
const stripe = require("stripe")("sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(require("body-parser").text());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/createPaymentIntent', async (req, res) => {

    const result = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: 'jpy',
        description: '●●商店決済', //option
        metadata: { username: req.body.username, tranId: '11111' } //option
    });

    console.log(result);
    res.json(result);

});

app.listen(9000, () => console.log("Listening on port 9000"));