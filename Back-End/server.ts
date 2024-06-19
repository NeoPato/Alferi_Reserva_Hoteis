import fastify from "fastify";
import { jsonSchemaTransform, serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { registerUsers } from "./routes/register-users.js";
import { getUsersBadge } from "./routes/get-users-badge.js";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifySwagger from "@fastify/swagger";

const app = fastify();

app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "hotel.api",
      description: "API specifications for the hotel application back-end.",
      version: "1.0.0",
    },
  },
  transform: jsonSchemaTransform,
});

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(registerUsers);
app.register(getUsersBadge);

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running on port 3333!');
});
