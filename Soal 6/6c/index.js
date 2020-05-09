const express = require('express')
const bodyParser = require("body-parser")
const mysql = require('mysql');
const koneksi = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbarkademy'
})


koneksi.connect( err => {
    if (err) {
        throw err;
    }
    console.log("Koneksi Berhasil");
});

const app = express();
app.use('/vendor', express.static('vendor'));
app.use('/img', express.static('img'));
app.use(express.static(__dirname + 'public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res) {
    const tableQuery = `SELECT 
    category.id AS id,
    cashier.name AS cashier,
    product.name AS product,
    category.name AS category,
    product.price AS price
     FROM product JOIN cashier ON cashier.id = product.id_cashier 
    JOIN category ON category.id = product.id_category`;

    koneksi.query(tableQuery, function(err,result){
        if (err) {
            console.log(err);
        }

        const queryResults = result;
        res.render('index.ejs', { 
            dataTabel: queryResults
        });
    })
})

app.post('/add', function(req, res){
    
    let nama = req.body.namaMakanan;
    let harga = req.body.harga;
    let optCategory = req.body.category;
    let optcashier = req.body.cashier;
    
    let addQuery = `INSERT INTO product (id, name, price, id_category, id_cashier) 
    VALUES (NULL, '${nama}', '${harga}', '${optCategory}', '${optcashier}')
    `;

    koneksi.query(addQuery, function(err, results){
        if(err) {
            console.log(err);
        }
        res.redirect('/');
    });
})

app.listen(8080);