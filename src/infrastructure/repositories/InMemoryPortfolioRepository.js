import { PortfolioRepository } from '../../domain/repositories/PortfolioRepository';
import {
  createProfile, createTool, createService, createProject,
  createExperience, createEducation, createPortrait, createNavLink, createSocialLink,
} from '../../domain/entities/Portfolio';

/** Adaptador que sirve el contenido desde un objeto local (mapea DTO -> entidades). */
export class InMemoryPortfolioRepository extends PortfolioRepository {
  constructor(data) {
    super();
    this.data = data;
  }
  async getProfile() { return createProfile(this.data.profile); }
  async getTools() { return this.data.tools.map(createTool); }
  async getServices() { return this.data.services.map(createService); }
  async getProjects() { return this.data.projects.map(createProject); }
  async getExperience() { return this.data.experience.map(createExperience); }
  async getEducation() { return createEducation(this.data.education); }
  async getPortrait() { return createPortrait(this.data.portrait); }
  async getNavigation() { return this.data.navigation.map(createNavLink); }
  async getSocialLinks() { return this.data.socialLinks.map(createSocialLink); }
}
