import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor() {
    this.Getdefault()
  }
  Getdefault() {
    var webSDK = new window.ByteLiveWebSDK({
      activityId: 1832174689150001,
      service: 'livesaas',
      mode: 1,
      token: 'IqPOIc',
      modules: [
        {
          id: 'player',
          mode: 'player',
        },
        {
          id: 'content',
          mode: 'menu',
        },
      ],
      options: {
        // mobileBackgroundTransparent: true,
      },
    });
    webSDK.on('error', console.log);
  }
  /// 直播间底部弹窗 返回页面还有
 
}
