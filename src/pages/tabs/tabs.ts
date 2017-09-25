import { Component } from '@angular/core';

import { LabworkPage } from '../labwork/labwork';
import { CekjadwalPage } from '../cekjadwal/cekjadwal';
import { CekmodulPage } from '../cekmodul/cekmodul';
import { CektpPage } from '../cektp/cektp';
import { UnggahlaporanPage } from '../unggahlaporan/unggahlaporan';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LabworkPage;
  tab2Root = CekjadwalPage;
  tab3Root = CekmodulPage;
  tab4Root = CektpPage;
  tab5Root = UnggahlaporanPage;

  constructor() {

  }
}
