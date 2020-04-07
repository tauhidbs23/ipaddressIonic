import { Component } from '@angular/core';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  getWiFiIPAddress1: any;
  getCarrierIPAddress2: any;
  getHttpProxyInformation3: any;

  constructor(private networkInterface: NetworkInterface) {

    this.networkInterface.getWiFiIPAddress()
      .then(address => {
        this.getWiFiIPAddress1 = address;
        console.info(`IP: ${address.ip}, Subnet: ${address.subnet}`)

      })
      .catch(error => console.error(`Unable to get IP: ${error}`));

    this.networkInterface.getCarrierIPAddress()
      .then(address => {
        this.getCarrierIPAddress2 = address;
        console.info(`IP: ${address.ip}, Subnet: ${address.subnet}`)
      })
      .catch(error => console.error(`Unable to get IP: ${error}`));

    const url = 'www.github.com';
    this.networkInterface.getHttpProxyInformation(url)
      .then(proxy => {
        this.getHttpProxyInformation3 = proxy;
        console.info(`Type: ${proxy.type}, Host: ${proxy.host}, Port: ${proxy.port}`)
      })
      .catch(error => console.error(`Unable to get proxy info: ${error}`));
  }

}
