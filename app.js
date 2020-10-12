const express = require('express');
const app = express();

const port = 3000;

const products = [
    {
        id: 1,
        name: "hammer",
    },
    {
        id: 2,
        name: "screwdriver",
    },
    {
        id: 3,
        name: "wrench",
    },
];

const customers = [
    {
        id: 1,
        name: "Steven",
        address: "Some place, somewhere"
    },
    {
        id: 2,
        name: "Judy",
        address: "Some place, somewhere"
    },
    {
        id: 3,
        name: "Eilidh",
        address: "Some place, somewhere"
    },
    {
        id: 4,
        name: "Isobel".
        address: "Some place, somewhere"
    }
]

const orders = [
    {
        id: 1,
        customer: 1,
        items: [
            {
                id: 1,
                productid: 3,
                quantity: 1
            },
            {
                id: 2,
                productid: 1,
                quantity: 2
            }
        ]
    },
    {
        id: 2,
        customer: 2,
        items: [
            {
                id: 1,
                productid: 2,
                quantity: 2
            },
            {
                id: 2,
                productid: 3,
                quantity: 1
            }
        ]
    }
];



async function logrequest(req) {
    let logData = req.url + " " + req.headers['user-agent'] + '\n';
    console.log(logData);

}

async function main() {

    app.get('/', (req, res) => res.send('Hello World!'));

    app.get("/products", (req, res) => {
        logrequest(req);
        res.json(products);
    });

    app.get("/customers", (req, res) => {
        logrequest(req);
        res.json(customers);
    });


    app.get('/products/:id', (req, res) => {
        // handle this request `req.params.id`
        logrequest(req);
        let id = parseInt(req.params.id);
        let product = products.find(x => id == x.id);
        res.json(product);
    })

    app.get('/customers/:id', (req, res) => {
        // handle this request `req.params.id`
        logrequest(req);
        let id = parseInt(req.params.id);
        let customer = customers.find(x => id == x.id);
        res.json(customer);
    })

    app.listen(port, () => console.log(`Example app listening on port ${port}!`));


}

main().catch((err) => {
    console.error("Error running sample:", err.message);
});
