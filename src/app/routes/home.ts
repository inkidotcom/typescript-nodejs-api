import {Router} from 'express';

const index = Router();

/* GET home page. */
index.get('/', function(req, res, next) {
    let now = new Date();
    res.json({ now: now});
//   res.render('index', { title: 'Visual Studio Code!' });
});

export default index;