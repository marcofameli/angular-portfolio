import {Component, signal} from '@angular/core';
import {IExperiences} from "../../interface/IExperiences.interface";

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Principais Tecnologias:",
        p: "Conhecimento das tecnologias que mais domino no desenvolvimento de software."
      },
      text: "Java, Spring, Golang, Docker, Angular."
    },
    {
      summary: {
        strong: "Desenvolvimento de APIs:",
        p: "Experiência na criação e implementação de APIs utilizando Go e Spring."
      },
      text: "Criação de uma API de filmes em Go com integração ao PostgreSQL."
    },
    {
      summary: {
        strong: "Containerização de Aplicações:",
        p: "Utilização do Docker para otimização e gerenciamento de aplicações."
      },
      text: "Containerizei minha API de filmes utilizando Docker."
    },
    {
      summary: {
        strong: "Desenvolvimento Frontend:",
        p: "Habilidade em criar interfaces de usuário utilizando Angular."
      },
      text: "Atualmente aprendendo Angular para desenvolvimento de aplicações web."
    }
  ]);
}
