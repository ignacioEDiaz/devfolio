/**
 * Contrato (puerto) del repositorio de portfolio.
 * Cualquier implementación (memoria, API REST, CMS) debe respetarlo.
 * @interface
 */
export class PortfolioRepository {
  /** @returns {Promise<import('../entities/Portfolio').Profile>} */
  async getProfile() { throw new Error('Not implemented'); }
  async getTools() { throw new Error('Not implemented'); }
  async getServices() { throw new Error('Not implemented'); }
  async getProjects() { throw new Error('Not implemented'); }
  async getExperience() { throw new Error('Not implemented'); }
  async getEducation() { throw new Error('Not implemented'); }
  async getPortrait() { throw new Error('Not implemented'); }
  async getNavigation() { throw new Error('Not implemented'); }
  async getSocialLinks() { throw new Error('Not implemented'); }
}
