import { Component, ViewChild } from '@angular/core';
import { last } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { formatNumber } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'list-page';
  
  displayedColumns: string[] = ['name:first', 'acount'];

  //arrays of data
  
  dataSource = USERS_DATA;
  endDataSource = this.dataSource;
 


constructor(private router:Router, private activateRouter:ActivatedRoute ){

  

}
 
//create arrays sort by types
  dataSourceOutcome:any[] = [];
  dataSourceIncome:any[] = [];
  dataSourceLoans:any[] = [];
  dataSourceInvestments:any[]= [];
  listButtons=document.querySelectorAll(".tab");  
  
  
   deleteButtonStyle() {
             
      document.querySelectorAll(".tab").forEach(element => element.classList.remove("tab-active"));
                
  }

  addButtonStyle(event:any) {
     
    event.path[1].classList.add("tab-active");

  }

  ngOnInit() {

    //default url
    this.router.navigate(['/navigator'],{queryParams: { tab: 'main' }});

 
    //create arrays sorted by types
  for(let i=0; this.dataSource.length;i++){

     
    if(this.dataSource[i] && this.dataSource[i].type=="outcome"){
 
    this.dataSourceOutcome.push(this.dataSource[i]);
    
    }
    else if(this.dataSource[i] && this.dataSource[i].type=="income"){

      this.dataSourceIncome.push(this.dataSource[i]);

    }

    else if(this.dataSource[i] && this.dataSource[i] && this.dataSource[i].type=="loan"){
 
        this.dataSourceLoans.push(this.dataSource[i]);

    }

    else if(this.dataSource[i] && this.dataSource[i].type=="investment"){
 
          this.dataSourceInvestments.push(this.dataSource[i]);
            }
      //fix TypeError   
else{
  break;
}
  
  
  }
  
    }

    

  tabChangeInCome(){
    
    this.endDataSource=this.dataSourceIncome;

        }

  tabChangeOutCome(){
    
    this.endDataSource=this.dataSourceOutcome;
      
        }
  tabChangeLoans(){
    
  this.endDataSource=this.dataSourceLoans;
            
        }
  tabChangeInvestments(){
    
    this.endDataSource=this.dataSourceInvestments;
                  
        }
  

        goToTab(num:number):void{
            this.router.navigate(['/navigator'],{queryParams: { tab: `${num}` }});
        }

        
        
      }


export interface usersAccount {
    
    name:{first:string, 
    last:string}
    id:string,
    amount:string,
    type:string,
    company:string,
    email:string,
    phone:string,
    address:string,
    acount:number,
    
      
  
  }

const USERS_DATA: usersAccount[] = [
  {
    "id": "5d99beb677015a5c2c14542e",
    "amount": "floating(1, 4000, 2)",
    "type": "outcome",
    "name": {
      "first": "Jordan",
      "last": "Bauer"
    },
    "company": "SNORUS",
    "email": "jordan.bauer@snorus.net",
    "phone": "+1 (901) 404-2928",
    "acount": 200,
    "address": "712 Bills Place, Cochranville, Florida, 6951"
 
  },
  {
    "id": "5d99beb69a6aac64be820dbe",
    "amount": "floating(1, 4000, 2)",
    "type": "outcome",
    "name": {
      "first": "Francis",
      "last": "Owens"
    },
    "company": "EXOPLODE",
    "email": "francis.owens@exoplode.us",
    "phone": "+1 (954) 566-2476",
    "acount": 300,
    "address": "457 Stockholm Street, Montura, Pennsylvania, 7855"
  },
  {
    "id": "5d99beb635dd82195040195b",
    "amount": "floating(1, 4000, 2)",
    "type": "outcome",
    "name": {
      "first": "Bass",
      "last": "Church"
    },
    "company": "ACCRUEX",
    "email": "bass.church@accruex.com",
    "phone": "+1 (881) 403-2661",
    "acount": 400,
    "address": "786 Ira Court, Abiquiu, Kentucky, 1055"
  },
  {
    "id": "5d99beb6283bac04b3763000",
    "amount": "floating(1, 4000, 2)",
    "type": "outcome",
    "name": {
      "first": "Mabel",
      "last": "Holt"
    },
    "company": "MALATHION",
    "email": "mabel.holt@malathion.io",
    "phone": "+1 (951) 520-3392",
    "acount": 310,
    "address": "890 Alice Court, Bath, New Hampshire, 6400"
  },
  {
    "id": "5d99beb6207f35413c9b629b",
    "amount": "floating(1, 4000, 2)",
    "type": "loan",
    "name": {
      "first": "Lambert",
      "last": "Higgins"
    },
    "company": "GEEKOLOGY",
    "email": "lambert.higgins@geekology.name",
    "phone": "+1 (957) 573-3207",
    "acount": 220,
    "address": "513 Schroeders Avenue, Moquino, Connecticut, 6353"
  },
  {
    "id": "5d99beb6f6db754cee0835a0",
    "amount": "floating(1, 4000, 2)",
    "type": "income",
    "name": {
      "first": "Jeanie",
      "last": "Wiley"
    },
    "company": "CORECOM",
    "email": "jeanie.wiley@corecom.tv",
    "phone": "+1 (931) 432-2272",
    "acount": 550,
    "address": "196 Highland Boulevard, Wildwood, Georgia, 8732"
  },
  {
    "id": "5d99beb6c0c5d1e73c8bb5a2",
    "amount": "floating(1, 4000, 2)",
    "type": "income",
    "name": {
      "first": "Lynn",
      "last": "Summers"
    },
    "company": "BLUEGRAIN",
    "email": "lynn.summers@bluegrain.biz",
    "phone": "+1 (877) 578-3987",
    "acount": 120,
    "address": "999 Ellery Street, Hartsville/Hartley, Tennessee, 8475"
  },
  {
    "id": "5d99beb69aec11b778e276c9",
    "amount": "floating(1, 4000, 2)",
    "type": "investment",
    "name": {
      "first": "Roseann",
      "last": "Lowe"
    },
    "company": "NORALI",
    "email": "roseann.lowe@norali.org",
    "phone": "+1 (969) 433-3912",
    "acount": 223,
    "address": "209 Saratoga Avenue, Riegelwood, Northern Mariana Islands, 3804"
  },
  {
    "id": "5d99beb61851f0fadfe6bca0",
    "amount": "floating(1, 4000, 2)",
    "type": "loan",
    "name": {
      "first": "Dianna",
      "last": "Underwood"
    },
    "company": "GEOLOGIX",
    "email": "dianna.underwood@geologix.me",
    "phone": "+1 (831) 506-2281",
    "acount": 431,
    "address": "379 Polar Street, Derwood, Michigan, 8219"
  },
  {
    "id": "5d99beb61894e3a0d8a8aaeb",
    "amount": "floating(1, 4000, 2)",
    "type": "investment",
    "name": {
      "first": "Misty",
      "last": "Wells"
    },
    "company": "ZILCH",
    "email": "misty.wells@zilch.info",
    "phone": "+1 (803) 453-3224",
    "acount": 7500,
    "address": "473 Rochester Avenue, Kraemer, Illinois, 140"
  },
  {
    "id": "5d99beb6b15536f75b46a608",
    "amount": "floating(1, 4000, 2)",
    "type": "investment",
    "name": {
      "first": "Tammie",
      "last": "Cotton"
    },
    "company": "GENMOM",
    "email": "tammie.cotton@genmom.co.uk",
    "phone": "+1 (891) 471-2924",
    "acount": 4200,
    "address": "599 Juliana Place, Alafaya, Maryland, 917"
  },
  {
    "id": "5d99beb62fc237aa62133abc",
    "amount": "floating(1, 4000, 2)",
    "type": "income",
    "name": {
      "first": "Rasmussen",
      "last": "Paul"
    },
    "company": "SUPPORTAL",
    "email": "rasmussen.paul@supportal.biz",
    "phone": "+1 (829) 473-3553",
    "acount": 770,
    "address": "164 Cedar Street, Basye, District Of Columbia, 5164"
  },
  {
    "id": "5d99beb6e0f76b46c0f5ce21",
    "amount": "floating(1, 4000, 2)",
    "type": "outcome",
    "name": {
      "first": "Allie",
      "last": "Solomon"
    },
    "company": "TOYLETRY",
    "email": "allie.solomon@toyletry.net",
    "phone": "+1 (835) 596-3561",
    "acount": 2000,
    "address": "335 Noll Street, Ernstville, New York, 5938"
  },
  {
    "id": "5d99beb67ba49c6e156b8999",
    "amount": "floating(1, 4000, 2)",
    "type": "investment",
    "name": {
      "first": "Hammond",
      "last": "Stanton"
    },
    "company": "XTH",
    "email": "hammond.stanton@xth.us",
    "phone": "+1 (967) 413-2650",
    "acount": 5010,
    "address": "468 Clifton Place, Harold, Puerto Rico, 2501"
  },
  {
    "id": "5d99beb6b13450897a61c8b0",
    "amount": "floating(1, 4000, 2)",
    "type": "loan",
    "name": {
      "first": "Scott",
      "last": "Petty"
    },
    "company": "ZOINAGE",
    "email": "scott.petty@zoinage.com",
    "phone": "+1 (913) 425-3420",
    "acount": 3121,
    "address": "475 Herkimer Street, Barstow, Utah, 9466"
  },
  {
    "id": "5d99beb6f9f4e1748d85a971",
    "amount": "floating(1, 4000, 2)",
    "type": "outcome",
    "name": {
      "first": "Alexander",
      "last": "Harrell"
    },
    "company": "RONELON",
    "email": "alexander.harrell@ronelon.io",
    "phone": "+1 (940) 577-2114",
    "acount": 672,
    "address": "962 Falmouth Street, Loma, Iowa, 2743"
  },
  {
    "id": "5d99beb600162e31cce6d255",
    "amount": "floating(1, 4000, 2)",
    "type": "loan",
    "name": {
      "first": "Letitia",
      "last": "Combs"
    },
    "company": "PHOLIO",
    "email": "letitia.combs@pholio.name",
    "phone": "+1 (962) 515-2518",
    "acount": 553,
    "address": "480 Tapscott Avenue, Remington, Arkansas, 4987"
  },
  {
    "id": "5d99beb6f46990cdedd7a054",
    "amount": "floating(1, 4000, 2)",
    "type": "loan",
    "name": {
      "first": "Myers",
      "last": "Russell"
    },
    "company": "IDEGO",
    "email": "myers.russell@idego.tv",
    "phone": "+1 (923) 524-3492",
    "acount": 456,
    "address": "912 Veronica Place, Sugartown, Alabama, 1510"
  },
 

];






