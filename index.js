const fastify = require('fastify')({ logger: true });
const path = require('path');
const fs = require('fs');

const dataPath = path.join(__dirname, 'data.json');
let items = [];

try {
  const data = fs.readFileSync(dataPath, 'utf8');
  items = JSON.parse(data);
  fastify.log.info(`Datos cargados: ${items.length} items.`);
} catch (error) {
  fastify.log.error('Error al cargar el archivo JSON:', error);
  process.exit(1);
}

const docsPath = path.join(__dirname, 'doc.md');
let documentation = '';

try {
  documentation = fs.readFileSync(docsPath, 'utf8');
  fastify.log.info('Documentación cargada correctamente.');
} catch (error) {
  fastify.log.error('Error al cargar el archivo de documentación:', error);
}

fastify.register(require('./routes'), { distros: items, documentation: documentation });

const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
