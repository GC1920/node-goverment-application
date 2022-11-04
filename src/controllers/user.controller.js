const soma = (req, res) => {
    const soma = 5 + 5

    res.send({ soma: soma })
}

module.exports = {
    soma
}