import {Component, signal} from '@angular/core';
import {IProjects} from "../../interface/IProjects.interface";


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/imagem.png',
      alt: 'Projeto API em Go',
      title: 'API de Filmes',
      width: '75x',
      height: '75px',
      description: 'colocar',
      links: [
        {
          name: "Filmes",
          href: 'https://github.com/marcofameli/go-movies-api',
        }
      ],
    },
  ]);
}
