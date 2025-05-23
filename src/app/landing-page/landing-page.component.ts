import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    RouterModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  constructor(private activatedRoute: ActivatedRoute) {}
  projects: any = [
    {
      projectName: 'project 1',
      image: 'assets/images/girl.jpg',
      btn1: 'Github',
      btn2: 'Live Demo',
    },
    {
      projectName: 'project 2',
      image: 'assets/images/girl.jpg',
      btn1: 'Github',
      btn2: 'Live Demo',
    },
    {
      projectName: 'project 3',
      image: 'assets/images/girl.jpg',
      btn1: 'Github',
      btn2: 'Live Demo',
    },
  ];

  services: any = [
    {
      icon: 'devices',
      heading: 'Web Application Development',
      subHeading:
        'Building dynamic, responsive web apps using frontend and backend technologies (e.g., React + Node.js, Vue + Django, etc.)',
    },
    {
      icon: 'code_blocks',
      heading: 'Frontend Development',
      subHeading:
        'UI/UX implementation with HTML, CSS, JavaScript, React, Vue, Angular, Mobile-responsive and accessible designetc.',
    },
    {
      icon: 'developer_mode_tv',
      heading: 'Backend Development',
      subHeading:
        'RESTful API & GraphQL development Server-side logic using Node.js, Django, Ruby on Rails, Laravel, etc.Authentication & Authorization (JWT, OAuth, etc.)',
    },
    {
      icon: 'database',
      heading: 'Database Design & Management',
      subHeading:
        'Relational (MySQL, PostgreSQL) and NoSQL (MongoDB, Firebase) databases,Data modeling, migrations, and performance optimization',
    },
  ];
}
