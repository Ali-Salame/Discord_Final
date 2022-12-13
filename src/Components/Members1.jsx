import React from 'react'
import Cards from './Cards'
import LoadingCom from './Loading'
import { useEffect,useState } from 'react'
import { nanoid } from 'nanoid'
// import AllUsers2 from '../Data/Users.json'

const Members = () => {
  const [OnlineUsers, setOnline] = useState();
  const [AllUsers, setAllUsers] = useState([]);
  const [Loading, setLoading] = useState(false)
  const [Counter, setCounter] = useState(0)
  let NewObject = {"Members":[
    {
      "Roles":'role',
      "nick":"nickname",
      "Profile_pic":"Profile_url",
      "bot":'true/false',
      "Username":"Username",
      "Hashtag":"Hashtag",
      "Userid":"Id",
      "Status":"status"
    }
  ]}

  useEffect(() => {
    fetch("https://discord.api.stdlib.com/guilds@0.2.4/members/list/", {
      "headers": {
        "authorization": "Bearer tok_dev_sGhPxG44csywtC1XPFRKtUso4atwjGwSLtTTeiiFfvnaDwAWvbzCy2YcEZLCt3Gk",
        "content-type": "application/json"
      },
      "body": "{\"guild_id\":\"725778017086996570\",\"limit\":200}",
      "method": "POST"
    }).then(response => (response.json()))
      .then(data => setAllUsers(data))

    fetch("https://discord.com/api/guilds/725778017086996570/widget.json")
      .then(response => response.json())
      .then(data => setOnline(data))
  }, []);
  useEffect(() => {
    if (AllUsers.length === 0){setLoading(true);}
    else{setLoading(false)}
  },[AllUsers])
  
  let cards = () => {
    // console.log(AllUsers)
    var users = AllUsers.map( user => {
      // roles
      let roles = user.roles
      let nick = user.nick
      let Profile_pic = user.user.avatar_url // Avatar Url
      let bot = user.user.bot // Bot ?
      let username = user.user.username // Username
      let hashtag = user.user.discriminator // Hashtag(discriminator)
      let userid = user.user.id // Onclick discordapp.com/users/${id}
      // let checkingOn = OnlineUsers.map(check => {
      //   if (check.username == username){
      //     if (check.status == 'online'){
      //         return check.status
      //       }else {return "offline"}
      //     }
      //   })
      return <Cards Profile_p={Profile_pic} nickname={nick} bot={bot} username={username} hashtag={hashtag} id={userid} roles={roles}/>
    })
    return users
  }
  
  return (
    <div className='Main_Members'>
      <h1>Members</h1>
      <div className='Main_Members_table'>
        {Loading ? <LoadingCom /> : cards()}
      </div>
    </div>
  )
}

export default Members









  // useEffect(() => {
  //   fetch("https://discord.com/api/guilds/725778017086996570/widget.json")
  //   .then(response => response.json())
  //   .then(data => data.members)
  // },[])
  // let users = () => {
    
  //   let names =  AllUsers2.map(item => {
  //     if (!item.user.bot){
  //       let id = nanoid()
  //       return <Cards name={item.user.username} roles={roles} profile={item.user.avatar_url} key={id}/>
  //     }
  //   })
  //   return names
  // }

