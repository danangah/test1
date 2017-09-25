import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LabworkPage } from '../pages/labwork/labwork';
import { CekjadwalPage } from '../pages/cekjadwal/cekjadwal';
import { CekmodulPage } from '../pages/cekmodul/cekmodul';
import { UnggahlaporanPage } from '../pages/unggahlaporan/unggahlaporan';
import { CektpPage } from '../pages/cektp/cektp';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LabworkPage,
    CekjadwalPage,
    CekmodulPage,
    CektpPage,
    UnggahlaporanPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LabworkPage,
    CekjadwalPage,
    CekmodulPage,
    CektpPage,
    UnggahlaporanPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
