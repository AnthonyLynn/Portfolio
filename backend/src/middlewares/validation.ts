import { Joi, celebrate } from "celebrate";

export const validateId = celebrate({
  params: Joi.object().keys({
    conversationId: Joi.string()
      .regex(/conv_([a-z0-9]){38}/)
      .messages({
        "string.alphanum": `The "conversationId" must be a valid id starting with conv_ and 38 a-z, 0-9 characters`,
      }),
  }),
});

export const validateResponse = celebrate({
  body: Joi.object().keys({
    input: Joi.string().required().messages({
      "string.empty": `The body "input" field must be filled in`,
    }),
    conversationId: Joi.string()
      .required()
      .regex(/conv_([a-z0-9]){38}/)
      .messages({
        "string.empty": `The body "conversationId" field must be filled in`,
        "string.alphanum": `The "conversationId" must be a valid id starting with conv_ and 38 a-z, 0-9 characters`,
      }),
  }),
});
