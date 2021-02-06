const axios = require('axios');

module.exports.getCommunes = async (req, res) => {
    axios.get(`https://farmanet.minsal.cl/maps/index.php/ws/getLocalesRegion?id_region=${req.params.region}`)

        .then(data => {
            if (data) {
                let newComunes = []
                data.data.map(pharm => {
                    let isExist = newComunes.find(com => com.communeId === pharm.fk_comuna);
                    if (!isExist) {
                        newComunes.push({ communeId: pharm.fk_comuna, communeName: pharm.comuna_nombre });
                    }
                    return newComunes;
                })
                return res.json({ communes: newComunes, pharmacys: data.data })
            }
        })
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}