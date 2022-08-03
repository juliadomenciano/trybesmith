import Joi from 'joi';

function validateProduct(data: unknown) {
  const schema = Joi.object({
    name: Joi.string().required().min(3),
    amount: Joi.string().required().min(3),
  });

  const { error } = schema.validate(data);

  if (error) {
    if (error.details[0].message.includes('length')
    || error.details[0].message.includes('string')) {
      const e = new Error(error.details[0].message);
      e.name = 'LengthValidation';
      throw e;
    }
    const e = new Error(error.details[0].message);
    e.name = 'ValidationError';
    throw e;
  }
}

export default validateProduct;