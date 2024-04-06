import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import {LivroComponent} from "./app/livro/livro.component";


bootstrapApplication(LivroComponent, appConfig)
  .catch((err) => console.error(err));
