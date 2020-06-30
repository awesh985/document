import { Component,  OnInit } from "@angular/core";
 import {AppserviceService  } from "./appservice.service";  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service: AppserviceService) { };
user:[];
  title = 'biodatafile';
  ngOnInit() {
      this.service.fetch().subscribe(
          data => {
            this.user = data;
          });
    
           
    }
    delete(_id){
      this.service.deleteData(_id).subscribe(data =>
        {
          this.ngOnInit();
        });
    
    }
  
}
