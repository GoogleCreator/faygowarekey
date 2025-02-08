const express = require('express');
const app = express();

const keyLength = 10;

function generateKeyFromTime(time) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < keyLength; i++) {
        const randomIndex = (time + i) % chars.length;
        result += chars[randomIndex];
    }
    return result;
}

app.get('/generate-key', (req, res) => {
    const globalTime = Math.floor(Date.now() / (1 * 60 * 1000)); // Get current global 5-minute interval
    const key = generateKeyFromTime(globalTime);
    res.json({ key });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
