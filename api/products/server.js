import "babel-polyfill";

import Volvox from 'volvox-core';
import vconsul from 'volvox-consul';
import vexpress from 'volvox-express';

import express from 'express'

async function main() {
    let server = express();

    server.get('/products', (req, res) => {
        res.send({
            customerName: "Test Product",
            customerId: 666
        });
    });

        // let volvox = new Volvox(vconsul(), vexpress());
    let volvox = new Volvox(vconsul(null, "http://consul1", null), vexpress());
    await volvox.bootstrap(server, "products", "v1");
}

main();