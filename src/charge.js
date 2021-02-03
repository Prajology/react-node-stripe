import Stripe from "stripe";
const stripe = new Stripe('sk_test_BQokikJOvBiI2HlWgH4olfQ2');


export default async (req,res) => {
    const {id,amount} = req.body;

    try{
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            description: 'Delicious empanadas',
            payment_method: id,
        })
        console.log(payment);

        return res.status(200).json({
            confirm: "product123"
        })
    } catch(error) {
        console.log(error);
        return res.status(400).json({
            message: error.message
        });
    }

};