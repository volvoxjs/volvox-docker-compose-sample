import "babel-polyfill";

import Volvox from 'volvox-core';
import vconsul from 'volvox-consul';
import vexpress from 'volvox-express';

import express from 'express'

async function main() {
    let server = express();

    server.get('/orders', (req, res) => {
        res.send({
            customerName: "Test Order",
            customerId: 666
        });
    });

    // let volvox = new Volvox(vconsul(), vexpress());
    let volvox = new Volvox(vconsul(null, "http://consul1", null), vexpress());
    await volvox.bootstrap(server, "orders", "v1");
}

main();