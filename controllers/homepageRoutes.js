const router = require('express').Router();

const { User,Indoor,Outdoor,Category} = require('../models');
const withAuth = require('../util/auth');

// router.get('/homepage', withAuth, async (req, res) => {
//   try {
    
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       // order: [['name', 'ASC']],
//     });

//     // const users = userData.map((project) => project.get({ plain: true }));

//     res.render('homepage', {
//       users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/homepage', (req, res) => {

  res.render('homepage');
});

router.get('/',(req,res)=>{
  res.redirect('/homepage')
})

router.get('/outdoor/:category_id',async(req,res)=>{
  console.log(req.params.category_id)
try{
const categoryData = await Category.findAll();
let categories = categoryData.map((category) => category.get({plain:true}));

const indoorData = await Indoor.findAll(
{
  where:{category_id:req.params.category_id}
}
);
    let indoors=indoorData.map((user) => user.get({plain:true}));

    res.render('indoor', {indoors,categories})

} catch (err) {
res.status(500).json(err);
}

})

// router.get('/', async (req, res) => {
//   //TODO: Add a comment describing the purpose of the render method
//     res.render('index');
//   });

  router.get('/outdoor', async (req, res) => {
    
    console.log(req.query)
    console.log(req.params)
    //TODO: Add a comment describing the purpose of the render method
    try {
    

      // user table data
      const userData = await User.findAll();
      let users = userData.map((user) => user.get({plain:true}));
     
      // categories table data
      const categoryData = await Category.findAll();
      let categories = categoryData.map((category) => category.get({plain:true}));
      console.log(categories)
      const whereObject={}
      if(req.query.category_id){
        whereObject["id"]=req.query.category_id
      }
      
      const outdoorData = await Outdoor.findAll({where:whereObject});
      let outdoors = outdoorData.map((user) => user.get({plain:true}));

      res.render('outdoor', {users,outdoors,categories})
    } catch (err) {
      res.status(500).json(err);
    }

      // res.render('activities');
    });


    router.get('/indoor/:category_id',async(req,res)=>{
      console.log(req.params.category_id)
try{
  const categoryData = await Category.findAll();
  let categories = categoryData.map((category) => category.get({plain:true}));

  const indoorData = await Indoor.findAll(
    {
      where:{category_id:req.params.category_id}
    }
  );
        let indoors=indoorData.map((user) => user.get({plain:true}));

        res.render('indoor', {indoors,categories})

} catch (err) {
  res.status(500).json(err);
}

    })

    router.get('/indoor', async (req, res) => {
      console.log('indoor')
      console.log(req.query)
      console.log(req.params)
      //TODO: Add a comment describing the purpose of the render method
      try {
    
        // user table data
        const userData = await User.findAll();
        let users = userData.map((user) => user.get({plain:true}));
       
        // categories table data
        const categoryData = await Category.findAll();
        let categories = categoryData.map((category) => category.get({plain:true}));
      
        const indoorData = await Indoor.findAll();
        let indoors=indoorData.map((user) => user.get({plain:true}));
      
        res.render('indoor', {users,indoors,categories})
      } catch (err) {
        res.status(500).json(err);
      }
  
     
      });
  














    router.get('/final', async (req, res) => {
      //TODO: Add a comment describing the purpose of the render method
        res.render('final');
      });
      
    
module.exports = router;





// ///////
// FIND THE DATA THAT YOU WANT TO RENDER
// res.render

// try {
//   const indoorData = await Indoor.findAll({
//     include: [{ model: Category }],
//   });
//   res.status(200).json(indoorData);
// } catch (err) {
//   res.status(500).json(err);
// }