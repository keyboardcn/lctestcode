const db = require("../models");
const Quote = db.quotes;
const Op = db.Sequelize.Op;

// Create and Save a new Quote
exports.create = (req, res) => {

    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Title can not be empty!!!!!"
        });
        return;
    }

    // Create a Quote
    const quote = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    // Save Quote in the database
    Quote.create(quote)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Quote."
            });
        });
};

// Retrieve all Quotes from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? {
        title: {
            [Op.like]: `%${title}%`
        }
    } : null;

    Quote.findAll({
            where: condition
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving quotes."
            });
        });
};

// Find a single Quote with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Quote.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Quote with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Quote with id=" + id
            });
        });
};