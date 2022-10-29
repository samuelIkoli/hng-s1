if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        slackUsername: 'Ayibanimi Ikoli',
        backend: true,
        age: 25,
        bio: "Ikoli Samuel is the name, Nile university, E.E.E. B.eng, 2021. Want to break into tech and I believe this is a great oppurtunity. Funny af, cute too, sexy too. Grade me A please. (pouting emoji, cute face emoji)"
    })
})

const port = process.env.PORT || 3000

app.listen(port, (err) => {
    if (err) console.log("Error in server setup")
    console.log('Serving on port 80')
});