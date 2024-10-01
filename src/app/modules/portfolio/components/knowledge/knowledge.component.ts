import {Component, signal} from '@angular/core';
import {IKnowledge} from "../../interface/IKnowledge.interface";

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([ // PAREI NA A43
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Java',
    },
    {
      src: 'assets/icons/knowledge/golang.svg',
      alt: 'Golang',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Angular',
    },
    {
      src: 'assets/icons/knowledge/docker.svg',
      alt: 'Docker',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'CSS',
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'HTML',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Javascript',
    },
  ])
}
