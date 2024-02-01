import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Inicio',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Frontend',
    path: '/frontend',
    icon: <Icon icon="lucide:monitor-smartphone" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Colores', path: '/frontend/colors' },
      { title: 'Deploys', path: '/frontend/deploys' },
      { title: 'Iconos', path: '/frontend/iconos' },
    ],
  },
  {
    title: 'Testing',
    path: '/testing',
    icon: <Icon icon="lucide:flask-conical" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Herramientas', path: '/testing/tools' },
    ],
  },
  {
    title: 'Backend',
    path: '/backend',
    icon: <Icon icon="lucide:database-zap" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Deploys', path: '/backend/deploys' },
      { title: 'Bases de Datos', path: '/backend/databases' },
    ],
  },
  {
    title: 'VS Code',
    path: '/vscode',
    icon: <Icon icon="mdi:microsoft-visual-studio-code" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Extensiones', path: '/vscode/extensions' },
    ],
  },
  {
    title:'Cursos',
    path: '/course',
    icon: <Icon icon="maki:library" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'React', path: '/course/react' },
      { title: 'Next', path: '/course/next' },

    ]
  }
];