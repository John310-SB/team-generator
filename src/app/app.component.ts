import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = "";
  members: string[] = [];
  errorMessage = "";
  numberOfTeams: number | "" = "";
  teams: string[][] = [];

  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = "No Name Detected"
      return;
    }
    this.errorMessage = ""
    this.members.push(this.newMemberName)
    this.newMemberName = ""
  }

  onInput(member: string) {
    this.newMemberName = member;
  }

  onNumberofTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = "Invalid Number of Teams"
      return
    }
    if(this.numberOfTeams > this.members.length){
      this.errorMessage="Not Enough Member"
      return
    }
    const allMembers = [...this.members]

    while (allMembers.length > 0) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];
        if (!member) {
          break
        }
        if (this.teams[i]) {
          this.teams[i].push(member)
        }
        else {
          this.teams[i] = [member]
        }
      }
    }
    console.log(this.teams)
    this.members = [];
    this.numberOfTeams = "";

  }

}
