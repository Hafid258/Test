const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.send('<h1>เลือกหน้าที่ต้องการ</h1><a href="/hello-word">ไปที่ Hello World</a><a href="/S-A">ไปที่ S-A</a><a href="/5">ไปที่ สวัสดีวันศุกร์</a>');
0
});

app.get('/hello-word', (req, res) => {
    res.send('Hello World!');
});

app.get('/S-A', (req, res) => {
    res.send('สุรเกียรติ น้ำใส 6504305001340<br> Anussara Khongthong 6504305001343');

});

app.get('/5', (req, res) => {
    res.send(`
        <html>
            <head>
                <style>
                    body {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        font-family: Arial, sans-serif;
                    }
                    h1 {
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <h1>สวัสดีวันศุกร์</h1>
            </body>
        </html>
    `);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});