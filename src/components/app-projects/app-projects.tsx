import { Component, Prop, getAssetPath, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-projects',
  styleUrl: 'app-projects.scss',
  shadow: true,
  assetsDirs: ['assets']
})
export class AppProjects {
  @Prop() match: MatchResults;

  get projects() {
    return [
      {
        title: 'this site',
        subtitle: 'my personal spot',
        image: 'johannathorsen.png',
        href: 'https://johannathorsen.github.io',
        description: 'where I gather all my projects',
        links: [
          {
            icon: 'github-light.png',
            href: 'https://github.com/Johannathorsen/johannathorsen.github.io'
          },
          {
            icon: 'open-external-link-icon.svg',
            href: 'https://johannathorsen.github.io'
          }
        ]
      },
      {
        title: 'korsfar',
        subtitle: 'a social gaming site',
        image: 'korsfar.png',
        href: 'https://korsfar.com',
        description: 'a gaming platform with a bunch of social games for 2-8 players',
        links: [
          {
            icon: 'github-light.png',
            href: 'https://github.com/Johannathorsen/johannathorsen.github.io'
          },
          {
            icon: 'open-external-link-icon.svg',
            href: 'https://korsfar.com'
          }
        ]
      }
    ];
  }

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  renderProject(project) {
    return (
      <div class="project">
        <div class="heading">
          <h2>{project.title}</h2>
          <h3>{project.subtitle}</h3>
        </div>
        <a href={project.href} target="_blank"><img src={getAssetPath(`./assets/${project.image}`)}></img></a>
        <div class="content">{project.description}</div>
        <div class="footer">
          {project.links.map((link) => {
            return (
              <a href={link.href} target="_blank"><img src={getAssetPath(`./assets/${link.icon}`)}></img></a>
            )
          })}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div class="app-projects fade-in">
        <h2>voilà! some of the projects i've been working on</h2>
        <div class="project-wrapper">
          {this.projects.map((project) => this.renderProject(project))}
        </div>
        <img src={getAssetPath('./assets/hill.svg')} class="hill"/>
      </div>
    );
  }
}
