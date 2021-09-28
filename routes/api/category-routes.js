const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',async (req, res) => {
  // find all categories
  const catData = await Category.findAll({
    include: [
      {
        model: Product, 
        }  ]
  });

  // Return the  promise inside of the JSON response
  return res.json(catData);
  // be sure to include its associated Products
});



  // find one category by its `id` value

  router.get('/:id', async (req, res) => {
    const catData = await Category.findByPk(
      req.params.id,
      {
        include: [
          {
            model: Product, 
            }  ]
      });
      return res.json(catData);

  // be sure to include its associated Products
});

router.post('/',async (req, res) => {
  // create a new category
  console.log(req.body)
  const catData = await Category.create(req.body);
  return res.json(catData)
});

 // update a category by its `id` value
router.put('/:id', async (req, res) => {
  const catData = await Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      },
    }
  );

  return res.json(catData);
});
 


router.delete('/:id', async (req, res) => {
  const catData = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.json(catData);
});
module.exports = router;
