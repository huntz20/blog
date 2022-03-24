import type { IncomingMessage, ServerResponse } from 'http'
import axios from "axios";

export default async (req: IncomingMessage, res: ServerResponse) => {
    const data = JSON.stringify({"collection":"post","database":"farhan-blog","dataSource":"Cluster0"});
    const config = {
        method: 'post',
        url: `${process.env.MONGO_URL}find`,
        headers: {
            'api-key': process.env.API_KEY,
            'Content-Type': 'application/json'
        },
        data : data
    };
    await axios(config)
        .then(function (response) {
            res.statusCode = 200
            res.end(JSON.stringify(response.data))
        })
        .catch(function (error) {
            res.statusCode = 500
            console.log(error);
            res.end(JSON.stringify(error))
        });

}
