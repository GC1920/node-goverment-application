import { createService, findAllService } from "../services/news.service.js";

const create = async (req, res) => {

    try {

        const { title, text, banner } = rq.body

        if(!title || !text || !banner) {

            res.status(400).send({ message: "Submit all fields for registration "});

        }

        await createService({
            title,
            text,
            banner,
            id: "ObjectIdFake1"
        });
        
        res.send(201);

    } catch (err) {
        
        res.status(500).send({ message: err.messagev });
    }

};

const findAll = async (req, res) => {

    const news = []
    res.send(news)

};

export default { create, findAll }