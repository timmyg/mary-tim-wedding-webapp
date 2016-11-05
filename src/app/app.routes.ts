import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { Story } from './story';
import { Wedding } from './wedding';
import { Registry } from './registry';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: Home },
  { path: 'registry', component: Registry },
  { path: 'our-story', component: Story },
  { path: 'our-wedding', component: Wedding },
  { path: 'details', loadChildren: () => System.import('./+detail') },
  { path: '**',    component: NoContent },
];
