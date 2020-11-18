class FinalTeam
{
    constructor(toi,tti,sto,stt,c,vc,team_num,team_credits)
    {
        this.team_one_index=toi
        this.team_two_index=tti
        this.selected_team_one=sto
        this.selected_team_two=stt
        this.captain=c
        this.vice_captain=vc
        this.team_number = team_num
        this.team_credits = team_credits
    }
}
let get_name= function(name)
{
    let s=name.split(" ")
    if(s.length>1)
    {
        return `${s[0].charAt(0)} ${s[1].substring(0,5)}`
    }
    return s.substring(0,6)
}
class Item
{
    constructor(index,score)
    {
        this.index = index
        this.score = score
    }
}
class Attempt
{
    constructor(team_list,team_count,team_list_id,toi,tti)
    {
        this.team_list = team_list
        this.team_list_count = team_count
        this.team_list_id = team_list_id
        this.team_one_index = toi
        this.team_two_index = tti
    }
}
class Match
{
    constructor(match_no,toi,tti)
    {
        this.match_no = match_no
        this.team_one_index = toi
        this.team_two_index = tti
        this.attempts = []
        this.result=false
        this.team_one_result=[]
        this.team_two_result=[]
    }
}
let displayDanger = function(msg)
{
    danger_alert = document.getElementById('danger_alert')
    danger_alert.style.display="block"
    danger_alert.textContent=msg;
}
let removeDanger = function()
{
    danger_alert = document.getElementById('danger_alert')
    danger_alert.style.display="none"
}
let raiseError = function(msg)
{
    displayDanger(msg);
    setTimeout(removeDanger,5000);
}
let get_rand_value = function(limit)
{
    return Math.floor(Math.random()*limit)
}
// nice
let displaySuccess = function(msg)
{
    success_alert = document.getElementById('success_alert')
    success_alert.style.display="block"
    success_alert.textContent=msg;
}
let removeSuccess = function()
{
    success_alert = document.getElementById('success_alert')
    success_alert.style.display="none"
}
let SuccessMsg = function(msg)
{
    displaySuccess(msg);
    setTimeout(removeSuccess,5000);
}
let print_content = function(div_id)
{
    var prtContent = document.getElementById(div_id);
    var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    WinPrint.document.write(prtContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
}
