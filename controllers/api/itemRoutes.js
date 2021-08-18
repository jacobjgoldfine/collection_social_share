const router = require("express").Router();
const { Item } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newItem = await Item.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newItem);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.delete("/:id", async (req, res) => {
//   try {
//     const itemData = await Item.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
// const router = require('express').Router();
// const { Item, User } = require('../../models');

// router.get('/', (req, res) => {
//   Item.findAll().then((itemData) => {
//     res.json(itemData);
//   });
// });


// router.post('/', async (req, res) => {
//     try {
//       const newItem = await Item.create({
//         ...req.body,
//       });

//       res.status(200).json(newItem);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });

// router.put('/:id', (req, res) => {
//   // update a category by its `id` value
//   Item.update(
//     {item_name: req.body.item_name,
//     item_description: req.body.item_description,
//     item_image: req.body.item_image},
//     {
//       where: {id: req.params.id}
//     })
//     .then(itemData => {
//       if (!itemData) {
//         res.status(404).json({ message: 'No Category found with that ID.' });
//         return;
//       }
//       res.json(itemData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.get('/:id', async (req, res) => {
//   try {
//     const itemData = await Item.findByPk(req.params.id, {
//       include: [
//         {
//           model: User, Item,
//           attributes: ['user_id', 'item_id'],
//         },
//       ],
//     });

// const item = itemData.get({ plain: true });

// res.render('item', {
//   ...item,
//   logged_in: req.session.logged_in
// });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


router.delete("/:id", async (req, res) => {
  try {
    const itemData = await Item.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!itemData) {
      res.status(404).json({ message: "No item found with this id!" });
      return;
    }

    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
