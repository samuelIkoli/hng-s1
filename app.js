if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        slackUsername: 'Ayibanimi Ikoli',
        backend: true,
        age: 25,
        bio: "Ikoli Samuel is the name, Nile university, E.E.E. B.eng, 2021. Want to break into tech and I believe this is a great oppurtunity. Funny af, cute too, sexy too. Grade me A please. (pouting emoji, cute face emoji)"
    })
})

<<<<<<< HEAD
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.post('/index', (req, res) => {
    let { x, y, operation_type } = req.body;
    var ans = 0
    console.log('hay')
    x = parseInt(x)
    y = parseInt(y)
    if (!x || !y) {
        let nums = operation_type.match(/\d+/g);
        x = parseInt(nums[0])
        y = parseInt(nums[1])
        console.log(x, y)
    }

    try {
        if (operation_type.includes('/') || operation_type.includes('divide') || operation_type.includes('over')) {
            ans = x / y
            operation_type = '/'
        }
        else if (operation_type.includes('+') || operation_type.includes('add') || operation_type.includes('plus')) {
            ans = x + y
            operation_type = '+'
        }
        else if (operation_type.includes('-') || operation_type.includes('minus') || operation_type.includes('subtract')) {
            ans = x - y
            operation_type = '-'
        }
        else
            res.send('x has to be an integer, y has to be an integer and the operation type has to be addition, subtraction or division.')
    } catch (error) {
        res.send('x has to be an integer, y has to be an integer and the operation type has to be addition, subtraction or division.')
    }
    res.json({ slackUsername: 'Samuel Ikoli', operation_type, result: ans })
})

app.listen(3000)
=======
const port = process.env.PORT || 3000

app.listen(port, (err) => {
    if (err) console.log("Error in server setup")
    console.log('Serving on port 80')
});
>>>>>>> refs/remotes/origin/main
