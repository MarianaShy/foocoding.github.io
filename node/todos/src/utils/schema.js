"Use strict"

import Joi from 'joi';


export const schema = Joi.object({
	text: Joi.string()
	.min(5)
	.max(100)
	.required(),
	//completed: boolean().required()
}).unknown(false)



const validateData = (req, res, next) => {
	const { error } = schema.validate(req.body);

	if (error) {
		 return res.status(400).json({ error: error.details[0].message });
	}

	next();
};

export default validateData;