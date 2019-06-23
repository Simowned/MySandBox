import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  call: string = 
  'https://datalake-prod2018.rbfa.be/graphql?operationName=GetTeamMembers&variables={%22teamId%22:%22147522%22,%22language%22:%22nl%22}&extensions={%22persistedQuery%22:{%22version%22:1,%22sha256Hash%22:%22cbbaa32e4580c9385409c85464d2578c88f1c051f6e3c55a2e5a47f11dce9e64%22}}';

}
