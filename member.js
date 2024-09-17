function skillsMember(){
        this.skills = ['HTML', 'CSS', 'Javascript'];
    this.memberName = 'Rahul';
    this.designation = 'Team Leader';
    this.display = function(){
        console.log(this.memberName + ' is a ' + this.designation + ' and knows ' + this.skills);
    }
}