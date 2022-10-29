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

app.listen(3000 || process.env)