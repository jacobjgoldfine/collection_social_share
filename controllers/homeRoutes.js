const router = require('express').Router();


router.get('/homepage', async (req, res) => {
  res.render('homepage');
});

router.get('/collection', async (req, res) => {
  res.render('collection');
});

router.get('/profile', async (req, res) => {
  res.render('profile');
});

router.get('/login', async (req, res) => {
res.render('login');
})

router.get('/item', async (req, res) => {
  res.render('item');
  })

/*router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const collectionData = await Collection.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const collections = collectionData.map((collection) => collection.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      collections, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/collection/:id', async (req, res) => {
  try {
    const collectionData = await Collection.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const collection = collectionData.get({ plain: true });

    res.render('collection', {
      ...collection,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/item/:id', async (req, res) => {
  try {
    const itemData = await Item.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const item = itemData.get({ plain: true });

    res.render('item', {
      ...item,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

*/



module.exports = router;
