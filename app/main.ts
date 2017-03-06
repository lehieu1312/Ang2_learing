import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {less12Module} from './less12.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(less12Module);
