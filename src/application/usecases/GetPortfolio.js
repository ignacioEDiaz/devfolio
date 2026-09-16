/**
 * Caso de uso: obtener todo el contenido del sitio en una sola llamada.
 */
export class GetPortfolio {
  /** @param {import('../../domain/repositories/PortfolioRepository').PortfolioRepository} repository */
  constructor(repository) {
    this.repository = repository;
  }

  async execute() {
    const r = this.repository;
    const [profile, tools, services, projects, experience, education, portrait, navigation, socialLinks] =
      await Promise.all([
        r.getProfile(), r.getTools(), r.getServices(), r.getProjects(),
        r.getExperience(), r.getEducation(), r.getPortrait(), r.getNavigation(), r.getSocialLinks(),
      ]);
    return { profile, tools, services, projects, experience, education, portrait, navigation, socialLinks };
  }
}
