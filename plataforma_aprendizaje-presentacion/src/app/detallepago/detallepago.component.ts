
import { Component, AfterViewChecked } from '@angular/core';

declare let paypal: any;

@Component({
  selector: 'app-detallepago',
  templateUrl: './detallepago.component.html',
  styleUrls: ['./detallepago.component.css']
})
export class DetallepagoComponent  implements AfterViewChecked {
  myDate = Date.now();
  addScript: boolean = false;
  paypalLoad: boolean = true;

  finalAmount: number = 1;

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AeAXIGtS-WHakYkrMyzSqnqDgHgzby5bCSGujl71rj3SyGgHUL77CUCfDmpBcC3ctgWxCIByaASpVehH',
      production: '<your-production-key here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {

      })
    }
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }

  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      const scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    });
  }

}
