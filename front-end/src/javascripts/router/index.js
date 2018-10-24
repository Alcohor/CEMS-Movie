import SMERouter from 'sme-router'

const router = new SMERouter('router-view')

export default router;

router.route('/cinema',(req,res,next) =>{
    
})


// router.route('/user/:id', (req, res, next) => {
//   const { params, query, body , url, route } = req

//   console.log(params.id) // output => 123
//   console.log(query.name) // output => hwen
//   console.log(body.mes) // output => hallo world
//   console.log(url) // output => /user/123?name=hwen
//   console.log(route) // output => /user/:id
// })

// router.go('/user/123?name=hwen', { mes: 'hallo world'})
