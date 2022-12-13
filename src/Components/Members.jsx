import React from 'react'
import Cards from './Cards'
import LoadingCom from './Loading'
import { useEffect,useState } from 'react'
import { nanoid } from 'nanoid'
import Api_Token from '../Data/ApiToken.json'
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
  const token = Object.getOwnPropertyDescriptor(Api_Token, "authorization")
  useEffect(() => {
    fetch("https://discord.api.stdlib.com/guilds@0.2.4/members/list/", {
      "headers": {
        "authorization": token.value,
        "content-type": "application/json"
      },
      "body": "{\"guild_id\":\"725778017086996570\",\"limit\":200}",
      "method": "POST"
    }).then(response => (response.json()))
      .then(data => setAllUsers(data))
  }, []);
  useEffect(() => {
    if (AllUsers.length === 0){setLoading(true);}
    // else{setLoading(false)}
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
      if (hashtag === '9875'){
        return <Cards Profile_p={Profile_pic} nickname={nick} bot={bot} username={username} hashtag={hashtag} id={userid} roles={roles} order2={1}/>
      }
      else if (hashtag === '9842'){
        return <Cards Profile_p={Profile_pic} nickname={nick} bot={bot} username={username} hashtag={hashtag} id={userid} roles={roles} order2={2}/>
      }
      else if (roles.length === 2 && !bot){
        return <Cards Profile_p={Profile_pic} nickname={nick} bot={bot} username={username} hashtag={hashtag} id={userid} roles={roles} order2={3}/>
      }
      else if (roles.length === 1 && !bot){
        return <Cards Profile_p={Profile_pic} nickname={nick} bot={bot} username={username} hashtag={hashtag} id={userid} roles={roles} order2={4}/>
      }
      else if (bot){
        return <Cards Profile_p={Profile_pic} nickname={nick} bot={bot} username={username} hashtag={hashtag} id={userid} roles={roles} order2={6}/>
      }
      else {
        return <Cards Profile_p={Profile_pic} nickname={nick} bot={bot} username={username} hashtag={hashtag} id={userid} roles={roles} order2={5}/>
      }

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
