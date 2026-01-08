import { Joi, celebrate } from "celebrate";

export const validateId = celebrate({
  params: Joi.object().keys({
    conversationId: Joi.string().alphanum().messages({
      "string.alphanum": `The "conversationId" must only contain a-z, A-Z, 0-9`,
    }),
  }),
});

export const validateResponse = celebrate({
  body: Joi.object().keys({
    input: Joi.string().required().messages({
      "string.empty": `The body "input" field must be filled in`,
    }),
    conversationId: Joi.string().required().alphanum().messages({
      "string.empty": `The body "conversationId" field must be filled in`,
      "string.alphanum": `The "conversationId" must only contain a-z, A-Z, 0-9`,
    }),
  }),
});
