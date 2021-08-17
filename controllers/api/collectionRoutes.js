const router = require("express").Router();
const { Collection, User, Item } = require("../../models");


router.get('/', (req, res) => {
  Collection.findAll().then((collectionData) => {
    res.json(collectionData);
  });
});

router.post('/', (req, res) => {
  Collection.create( req.body)
    .then((newCollection) => {
      res.json(newCollection);
    })
    .catch((err) => {
      res.json(err);
    });
  });

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Collection.update(
    {col_name: req.body.col_name,
    col_description: req.body.col_description},
    {
      where: {id: req.params.id}
    })
    .then(collectionData => {
      if (!collectionData) {
        res.status(404).json({ message: 'No Collection found with that ID.' });
        return;
      }
      res.json(collectionData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', async (req, res) => {
  try {
    const collectionData = await Collection.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!collectionData) {
      res.status(404).json({ message: "No collection found with this id!" });
      return;
    }

    res.status(200).json(collectionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
