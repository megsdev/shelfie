module.exports = {
    getInventory: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_inventory()
        .then( products => res.status(200).send(products) )
        .catch( error => {
            res.status(500).send({errorMessage: 'Something went wrong'})
            console.log('error: ', error)
        })
    },

    addProduct: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { name, price, imageUrl } = req.body 

        dbInstance.create_product([name, price, imageUrl])
        .then (() => res.status(200))
        .catch(error => {
            res.status(500).send({errorMessage: 'Something went wrong'})
            console.log('error', error)
        })   
    },

    delete: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.delete_product([ req.params.id ])
        .then( (products) => res.status(200).send(products) )
        .catch( error => {
            res.status(500).send({errorMessage: 'Something went wrong',})
            console.log('error', error)
        })
    },

    edit: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { name, price, imageUrl } = req.body;

        dbInstance.edit_product([req.params.id, name, price, imageUrl])
        .then(() => res.status(200).send())
        .catch(() => {
            res.status(500).send({errorMessage: 'Something went wrong',})
            console.log('error', error)
        });
    },

    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db')
        
        dbInstance.get_one([req.params.id])
        .then( product => res.status(200).send(product) )
        .catch( error => {
            res.status(500).send({errorMessage: 'Something went wrong'})
            console.log('error: ', error)
        })
    }

}