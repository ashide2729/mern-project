const router = require('express').Router();
let Weather = require('../models/weather.model');

router.route('/').get((req, res) => {
    Weather.find()
        .then(weathers => res.json(weathers))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const city = req.body.city;
    const weather = req.body.weather;
    const temp = req.body.temp;
    const humidity = req.body.humidity;

    const newWeather = new Weather({
        city, weather, temp, humidity,
    })

    newWeather.save()
    .then(() => res.json('Weather added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Weather.findById(req.params.id)
        .then(weathers => res.json(weathers))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Weather.findByIdAndDelete(req.params.id)
        .then(weathers => res.json('Weather deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Weather.findById(req.params.id)
    .then( weathers => {
        weathers.city = req.body.city;
        weathers.weather = req.body.weather;
        weathers.temp = req.body.temp;
        weathers.humidity = req.body.humidity;    

        weathers.save()
        .then(() => res.json('Weather updated!'))
        .catch(err => res.status(400).json('Error: ' + err));    
    })
    .catch(err => res.status(400).json('Error: ' + err));    
});

module.exports = router;
