function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
  this.isWorthIt = function(){
    return this.draft - this.crew * 1.5 > 20
  }
}
git commit --amend --date="2022-12-30 50:12:20"