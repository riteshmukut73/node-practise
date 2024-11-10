const joi = require('joi')

const registervalidation = (data) => {
        const Schema = joi.object({
            name: joi.string().required().min(2).
            max(7),
            email: joi.string().required().email(),
            mobile: joi.string().integer().min(10).max(10).required()
        })

        return schema.validate(data)


        const loginvalidation = (data) => {
            const Schema = joi.object({
                email: joi.string().required().email(),
                password: joi.string().required().min(5).
                max(8),
            })
            return schema.validate(data)
        }

        module.exports = registervalidation = registervalidation;
        module.exports.loginvalidation = loginvalidation;