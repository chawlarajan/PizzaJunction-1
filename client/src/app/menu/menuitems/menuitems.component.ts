import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from './../../shared/models/menuitem';
//import { MenuService } from './../../shared/services/menu.service';       //removed as added in resolve

@Component({
    selector: 'menu-items',
    templateUrl: './menuitems.component.html'
})
export class MenuItemsComponent implements OnInit {
    //@Input() item: MenuItem[];    
    constructor(private route: ActivatedRoute) { }
    menuItems: MenuItem[];

    ngOnInit() {
        this.menuItems = this.route.snapshot.data['menuItems'].GetMenuItems;        
        //this.menuItems = this.menuService.getMenuItems();     //uncomment if removed asynchronous getting of data
        //subscribe as getting data asynchronoysly
        // this.menuService.getMenuItems().subscribe(data => {
        //     //var newList = this.getNewList(data.GetMenuItems);
        //     this.menuItems = data.GetMenuItems;
        // });
    };
    
    getNewList = function(arr: MenuItem){
        var arrItems: MenuItem[];
        
        //var index = arr.findIndex((inside: MenuItem) => (inside.ItemTitle === item.ItemTitle));
        //this.arrItems.push(item);
        //var index = this.arrItems.findIndex((inside: MenuItem) => (inside.ItemTitle === item.ItemTitle));

        //console.log(this.arrItems);
    };
}