import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-projects',
  styleUrl: 'app-projects.scss',
  shadow: true,
})
export class AppProjects {
  @Prop() match: MatchResults;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  renderProject() {
    return (
      <div class="project"></div>
    );
  }

  render() {
    return (
      <div class="app-projects fade-in">
        <p>Hello! My name is {this.normalize(this.match.params.name)}. My name was passed in through a route param!</p>
        <div class="project-wrapper">
          {this.renderProject()}
          {this.renderProject()}
        </div>
      </div>
    );
  }
}
