
const http = require('node:http');


const PORT = 3000;
const sevidor = http.createServer();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

