var express = require('express')
var app = express()
app.use(express.static("."))
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static("."));

app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
})

var cradle = require('cradle');
var connection = new (cradle.Connection)('http://127.0.0.1', 5984, {
    auth: { username: 'admin', password: 'password' }
});

var db = connection.database("shoppingcenter");
var db2 = connection.database("shoppingcart");
var db3 = connection.database("users");


var dbdata = [{
    name: 'Original Penguin Long-Sleeve Solid Oxford Dress Shirt',
    skills: ['60% Cotton', '40% Polyester', 'Machine Wash', 'Long sleeves', 'Shirttail hem','Made in Indonesia'],
    type: 'men',
    image: 'img/men_image1.jpg',
    image2: 'img/men_image2.jpg',
    image3: 'img/men_image3.jpg',
    image4: 'img/men_image4.jpg',
    image5: 'img/men_image5.jpg',
    price: 89.00
}, {
        name: 'Ben Sherman Long-Sleeve Diamond-Stitch House Check Shirt',
        skills: ['100% Cotton', 'Button closure', 'Machine Wash', 'Long sleeves with contrast inner cuffs','Shirttail hem'],
        type: 'men',
        image: 'img/men2_image1.jpg',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        price: 109.89
    }, {
        name: 'Fossil Quartz Stainless Steel and Leather Automatic Watch',
        skills: ['White leather quartz watch', 'Durable mineral crystal protects watch from scratches', 'Quartz Movement', 'Water Resistant'],
        type: 'women',
        image: 'img/women_image1.jpg',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        price: 125.00
    }, {
        name: 'Fossil ES3973 Riley Multifunction Stainless Steel Watch',
        skills: ['White resin quartz watch', 'Durable mineral crystal protects watch from scratches', 'Quartz Movement', 'Water Resistant'],
        type: 'women',
        image: 'img/women2_image1.jpg',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        price: 270.00
    }, {
        name: 'Fossil Harper Large Cross Body Bag',
        skills: ['100% Leather', 'Imported', '100 Manmade lining', 'Zipper closure','19" shoulder drop','10" high'],
        type: 'girls',
        image: 'img/girls_image1.jpg',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        price: 228.00
    }, {
        name: 'Fossil Jules Large Fringe Drawstring Satchel Bag',
        skills: ['100% Leather', 'Imported', 'Drawstring closure', '100% Man Made Materials lining','20" shoulder drop'],
        type: 'girls',
        image: 'img/girls2_image1.jpg',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        price: 290.00
    }, {
        name: 'PUMA Speed Light up V Kids Sneaker ',
        skills: ['Synthetic', 'Rubber sole', 'Lights up'],
        type: 'boys',
        image: 'img/boys7_image1.jpg',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        price: 60.00
    }, {
        name: 'Puma Speeder Boys Light-Up Sneaker ',
        skills: ['Synthetic', 'Rubber sole', 'Lights up','Removable kinder fit sockliner'],
        type: 'boys',
        image: 'img/boys6_image1.jpg',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        price: 54.95
    }, {
        name: 'Lovedbaby Organic Infant Cap',
        skills: ['100% Cotton', 'Imported', 'Machine Wash', '100% Organic Cotton'],
        type: 'baby',
        image: 'img/baby4_image1.jpg',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        price: 25.00
    }, {
        name: 'Lovedbaby Unisex Baby Organic Hoodie',
        skills: ['100% Cotton', 'Imported', 'Machine Wash'],
        type: 'baby',
        image: 'img/baby3_image1.jpg',
        image3: '',
        image4: '',
        image5: '',
        price: 22.99
    }, {
        name: 'Diesel Safado Regular Slim Straight-Fit Jean 845B',
        skills: ['98% Cotton/2% Elastane', 'Machine Wash', 'Logo patch on back waistband', 'Signature embroidery on back pockets'],
        type: 'men',
        image: 'img/men3_jeans1.jpg',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        price: 208.00
    }, {
        name: 'Diesel Safado Regular Slim Straight Jean 844W',
        skills: ['98% Cotton/2% Elastane', 'Fading at leg and whiskering at hip', 'Machine Wash', 'ight-wash jean featuring five-pocket styling'],
        type: 'men',
        image: 'img/men4_jeans1.jpg',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        price: 198.76
    }, {
        name: 'Fossil Jules Tassle Drawstring Satchel Bag',
        skills: ['100% Leather', 'Imported', '100% Textile lining', 'Drawstring closure'],
        type: 'girls',
        image: 'img/girls3_image1.jpg',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        price: 138
    }, {
        name: 'Fossil Preston Small Flap Cross Body',
        skills: ['100% Cotton', 'Imported', 'cotton lining', 'Flap closure'],
        type: 'girls',
        image: 'img/girls4_image1.jpg',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        price: 80.71
    }, {
        name: 'Gerber Unisex-Baby Newborn 2 Pack Novelty Caps',
        skills: ['Machine Wash', 'Imported', '100% Cotton', 'Made in China'],
        type: 'baby',
        image: 'img/baby2_image1.jpg',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        price: 50.22
    }, {
        name: 'Lovedbaby Organic Infant Lounge Pant',
        skills: ['Machine Wash', 'Imported', '100% Cotton', 'NB size is 0-7 lbs, perfect for preemies'],
        type: 'baby',
        image: 'img/baby1_image1.jpg',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        price: 30.95
    }, {
        name: 'Calvin Klein Premium Wool Laser Cut Coat with Raw Edge',
        skills: ['30% Wool, 25% Acrylic, 20% Cotton,', 'Imported', 'Made in India', 'Premium'],
        type: 'men',
        image: 'img/men5_jacket1.jpg',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        price: 226.23
    }, {
        name: 'Calvin Klein Wool-Blend Toggle Coat',
        skills: ['60% Wool/30% Polyester', 'Imported', 'Dry Clean Only', 'Made in India'],
        type: 'men',
        image: 'img/men6_image1.jpg',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        price: 106.00
    }]

db.exists(function (err, exists) {
    if (err) { concole.log("Error: ", err); }
    else if (exists) { console.log("Database Exists") }
    else {
        db.create(function (err, data) {
            console.log("Database does not exists");
            if (err) { console.log("Error: ", err); }
            else {
                console.log("Success"); db.save(dbdata, function (err, res) {
                    if (err) { console.log("Error: ", err) }
                    else {
                        console.log("Success ", res);
                    }
                });
                db.save('_design/productList', {
                    all: {
                        map: function (doc) {
                            if (doc.name) emit(doc.name, { 'id': doc.id, 'name': doc.name, 'skills': doc.skills, 'type': doc.type, 'price':doc.price,'image':doc.image });
                       }
                    }
                });
            }
        });
    }
});

app.get('/', function (req, res) {
    res.send("Hello World !!");
})

app.post('/api/deletecart', function(req,res){
    console.log(req.body);
    db2.remove(req.body.id, function(err,resp){
         if (err) {
                    console.log("Error: ", err);
                }
                else {
                    console.log("Yahoo !!!");
                    res.send("Success");
                }
    })
})

app.post('/api/addtocart', function (req, res) {
    console.log(req.body);
    db2.exists(function (err, exists) {
        if (err) { concole.log("Error: ", err); }
        else if (exists) {
            console.log("Shopping Cart Exists");
            db2.save(req.body, function (err, resp) {
                if (err) {
                    console.log("Error: ", err);
                }
                else {
                    console.log("Item Added");
                    res.send("Success");
                }
            });
        }
        else {
            db2.create(function (err, data) {
                console.log("shopping Cart does not exists");

                if (err) { console.log("Error: ", err); }
                else {
                    console.log("Success");

                    db2.save(req.body, function (err, resp) {
                        if (err) { console.log("Error: ", err) }
                        else {
                            console.log("Success ");
                            res.send("Success");
                        }
                    });
                    db2.save('_design/shopCart', {
                        all: {
                            map: function (doc) {
                                if (doc.username) emit(doc.username, { 'username': doc.username,'id': doc._id, 'name': doc.productname,'type': doc.description, 'price':doc.price, 'image':doc.image});
                            }
                        }
                    });
                }
            });
        }
    });
});

app.post('/api/authenticateuser', function (req, res) {
    db3.view('authenticateuser/all', function (err, respose) {
        if (respose) {
            respose.forEach(function (item) {
                if (item.username === req.body.username && item.password === req.body.password) {
                    db2.exists(function (err, exists) {
                        if(exists){
                             db2.destroy(function(err,data){
                                 console.log("hello");
                             });
                        }
                });
                    res.send(respose);
                }
            });
        }
        else{
            res.send("Failed");
        }
    });
});

app.post('/api/registeruser', function (req, res) {
    db3.exists(function (err, exists) {
        if (err) { concole.log("Error: ", err); }
        else if (exists) {
            db3.save('_design/authenticateuser', {
                all: {
                    map: function (doc) {
                        if (doc.username) emit(doc.username, { 'id': doc._id, 'username': doc.username, 'password': doc.password });
                    }
                }
            });
            console.log("User Database Exists");
            db3.save(req.body, function (err, resp) {
                if (err) {
                    console.log("Error: ", err);
                }
                else {
                    console.log("User Regsitered");
                    res.send("Success");
                }
            });
        }
        else {
            db3.create(function (err, data) {
                console.log("User Database does not exists");
                if (err) { console.log("Error: ", err); }
                else {
                    db3.save('_design/authenticateuser', {
                        all: {
                            map: function (doc) {
                                if (doc.username) emit(doc.username, { 'id': doc._id, 'username': doc.username, 'password': doc.password });
                            }
                        }
                    });
                    db3.save(req.body, function (err, resp) {
                        if (err) {
                            console.log("Error: ", err);
                        }
                        else {
                            console.log("Database Created");
                            res.send("Success");
                        }
                    });
                }
            });
        }
    });
});

app.get('/api/getcart', function (req, res) {
    db2.view('shopCart/all', function(err,respose){
        console.log(respose);
        res.send(respose);
    });
});

app.get('/api/getproducts', function (req, res) {
    str = '[';
    db.view('productList/all', function (err, response) {
        res.send(response);
    });
});



