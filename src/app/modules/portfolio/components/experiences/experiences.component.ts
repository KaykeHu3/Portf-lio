import { Component, signal } from '@angular/core';

//Interface
import { IExperiences } from '../../interface/IExperiences.interface';

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
      summary:{
        strong: 'Programador de Máquina de Corte (Comandos Númericos)',
        p: 'Vectron | Integral | In-Person | Jul 2023 - Present'
      },
      text: 'Desde de 2023 estou trabalhando como programador de máquinas de corte a laser e pneumático.'
    },
    {
      summary:{
        strong: 'Web Designer',
        p: 'Máximo Compras | Integral | In-Person | Set 2020 - Mar 2021'
      },
      text: 'Trabalhei como Web Designer da Máximo Compras, onde esta era uma empresa de droppshiping de calçados'
    },
    {
      summary:{
        strong: 'Devolução',
        p: 'Ark Calçados | Integral | In-Person | Out 2021 - Fev 2022'
      },
      text: 'Fui responsável pela devolução da Ark Calçados (Fábrica de Calçados)'
    }
  ])
}
