const _ = require('lodash');
const { marked } = require('marked')

async function routes(fastify, options) {
  const { distros, documentation } = options;

  /** 
   * Documentación de la API en formato Markdown.
   * Esta documentación describe las rutas disponibles y su funcionamiento.
   */
  fastify.get('/', async (request, reply) => {
    const html = marked.parse(documentation);
    reply.header('Content-Type', 'text/html; charset=utf-8');
    return html;
  });

  /**
   * Ruta para obtener todos los items.
   * Devuelve una lista de todas las distribuciones.
   */
  fastify.get('/distros', async (request, reply) => {
    return reply.send(distros);
  });

  /**
   * Ruta para buscar items por filtros.
   * Los filtros se pasan como parámetros de consulta (query parameters).
   * @example /search?name=ubuntu
   */
  fastify.get('/search', async (request, reply) => {
    const filtros = request.query;

    const resultados = _.filter(distros, (distro) => {
      return Object.keys(filtros).every((key) => {
        const valorFiltro = filtros[key].toLowerCase();
        const valorItem = distro[key] ? String(distro[key]).toLowerCase() : null;
        return valorItem && valorItem.includes(valorFiltro);
      });
    });

    return reply.send(resultados);
  });
}

module.exports = routes;
