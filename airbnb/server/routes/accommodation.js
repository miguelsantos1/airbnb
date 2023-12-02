
const express = require('express')
const router = express.Router()
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


router.get('/', async (req, res) => {

    const accommodation = await prisma.accommodation.findMany({
        include: {
            _count: true
        }
    })

    return res.json({
        error: false,
        msg: "Listar todos as acomodações.",
        accommodation
    })
    
})


router.get('/:id/accommodation/', async (req, res) => {

    const { id } = req.params

    const accommodation = await prisma.accommodation.findUnique({
        where: {
            id: id
        },
        include: {
            feedbacks: true
        }
    })

    return res.json({
        error: "false",
        msg: `Pousada: ${id}`,
        accommodation
    })

})


router.post('/accommodation', async (req, res) => {

    const accommodation = await prisma.accommodation.create({
        data: {
            name: req.body.name,
            description: req.body.description,
            img: req.body.img,
        }
        
    })

    return res.json({
        error: false,
        msg: "Acomodação criada.",
        accommodation
    })

})

router.post('/feedback/:id', async (req, res) => {

    const { id } = req.params

    const feedback = await prisma.feedback.create({

        data: {
            title: req.body.title,
            about: req.body.about,
            accommodationId: id
        } 
    })

    return res.json({
        error: false,
        msg: "Feedback criado",
        feedback    
    })

})


module.exports = router