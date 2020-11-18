let get_captain_players = function(team1,team2,index_one_list,index_two_list,series_index)
{
    cp = document.getElementById('captain_panel')
    cp.style.display="block"
    all_teams = sd.req_data[series_index].teams
    all_team_one=all_teams[team1]
    all_team_two=all_teams[team2]
    team1_data=[]
    team2_data=[]
    all_team_one.players.forEach((player,index)=>
    {
        if(index_one_list.includes(index))
            team1_data.push(player)
    })
    all_team_two.players.forEach((player,index)=>
    {
        if(index_two_list.includes(index))
            team2_data.push(player)
    })
    role_value = ['','WK','BAT','AL','BOWL']
let team_list=sd.req_data[series_index].teams_list

    team_one = document.getElementById('captain_team_one')
    team_two = document.getElementById('captain_team_two')
    team_one_head = document.getElementById('captain_team_one_head')
    team_two_head = document.getElementById('captain_team_two_head')
    team_one_img = document.createElement('img')
    team_two_img = document.createElement('img')
    team_one_img.src = 'dream11_images/'+team_list[team1]+".jpg"
    team_two_img.src = 'dream11_images/'+team_list[team2]+".jpg"
    team_one_img.classList.add('team-image')
    team_two_img.classList.add('team-image')

    span_one = document.createElement('span')
    span_two = document.createElement('span')
    span_one.classList.add('span_one_index')
    span_one.classList.add('span_two_index')
    span_one.textContent=team1
    span_two.textContent=team2
    span_one.style.display="none"
    span_two.style.display="none"
    team_one_head.appendChild(team_one_img)
    team_one_head.appendChild(span_one)
    team_two_head.appendChild(team_two_img)
    team_two_head.appendChild(span_one)


    
    team1_data.forEach((player)=>
    {
        outer_div = document.createElement('div')
        inner_div1 = document.createElement('div')
        inner_div2 = document.createElement('div')
        span_name = document.createElement('span')
        span_name.textContent=player.player_name
        span_index=document.createElement('span')
        span_index.textContent=player.player_index
        span_index.setAttribute("id","p_index")
        span_index.style.display="none"
        span_role = document.createElement('span')
        span_role.setAttribute('id','player_role')
        span_role.textContent=role_value[player.player_role]
        span_credits = document.createElement('span')
        span_credits.textContent=player.player_credits
        inner_div2.classList.add('d-flex','justify-content-between')
        inner_div2.appendChild(span_role)
        inner_div2.appendChild(span_credits)
        inner_div1.appendChild(span_index)
        inner_div1.appendChild(span_name)
        inner_div1.appendChild(inner_div2)
        inner_div1.classList.add('d-flex','flex-column','justify-content-center')
        inner_div1.style.width="140px"
        var img = document.createElement('img');
        img.src = 'player_images/'+player.player_image+'.jpg';
        img.style.width="30px"
        img.style.height="30px"
        img.style.marginRight="10px"
        outer_div.appendChild(img)
        outer_div.appendChild(inner_div1)
        outer_div.classList.add('d-flex','justify-content-between','align-items-center','border-grey','captain_team_one_data')
        outer_div.style.width="200px";
        outer_div.style.marginTop="10px"
        outer_div.style.marginBottom="10px"
        team_one.appendChild(outer_div)
    })
    team2_data.forEach((player)=>
    {
        outer_div = document.createElement('div')
        inner_div1 = document.createElement('div')
        inner_div2 = document.createElement('div')
        span_name = document.createElement('span')
        span_name.textContent=player.player_name
        span_index=document.createElement('span')
        span_index.textContent=player.player_index
        span_index.setAttribute("id","p_index")
        span_index.style.display="none"
        span_role = document.createElement('span')
        span_role.setAttribute('id','player_role')
        span_role.textContent=role_value[player.player_role]
        span_credits = document.createElement('span')
        span_credits.textContent=player.player_credits
        inner_div2.classList.add('d-flex','justify-content-between')
        inner_div2.appendChild(span_role)
        inner_div2.appendChild(span_credits)
        inner_div1.appendChild(span_name)
        inner_div1.appendChild(span_index)
        inner_div1.appendChild(inner_div2)
        inner_div1.classList.add('d-flex','flex-column','justify-content-center')
        inner_div1.style.width="140px"
        var img = document.createElement('img');
        img.src = 'player_images/'+player.player_image+'.jpg';
        img.style.width="30px"
        img.style.height="30px"
        img.style.marginRight="10px"
        outer_div.appendChild(img)
        outer_div.appendChild(inner_div1)
        outer_div.classList.add('d-flex','justify-content-between','align-items-center','border-grey','captain_team_two_data')
        outer_div.style.width="200px";
        outer_div.style.marginTop="10px"
        outer_div.style.marginBottom="10px"
        team_two.appendChild(outer_div)
    })
    team_one_data = document.querySelectorAll('.captain_team_one_data')
    team_two_data = document.querySelectorAll('.captain_team_two_data')
    team_one_data.forEach((obj)=>
    {
        obj.addEventListener('click',()=>
        {
            if(Array.from(obj.classList).includes('border-grey'))
            {
                obj.classList.remove('border-grey')
                obj.classList.add('border-orange')
            }
            else{
                obj.classList.remove('border-orange')
                obj.classList.add('border-grey')
            }
        })
    })
    team_two_data.forEach((obj)=>
    {
        obj.addEventListener('click',()=>
        {
            if(Array.from(obj.classList).includes('border-grey'))
            {
                obj.classList.remove('border-grey')
                obj.classList.add('border-orange')
            }
            else{
                obj.classList.remove('border-orange')
                obj.classList.add('border-grey')
            }
        })
    })
}