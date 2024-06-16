// import { playerMusic } from "../messages/playerMusic.js"    
// const KDTime = {}  
// export const djarvis = async (client) => {
//     try {
//             await client.on('voiceStateUpdate', (s, n) => {
//                 let id = n.id
//                 console.log(id)

//                 if(Date.now() - KDTime[id] < 1000*60*60*8) {
//                     return
                    
//                 }

//                 KDTime[id] = Date.now()


//                 console.log('play', KDTime)
//                  if (n.channelId) {
//                     if(id == '972207964771479553') return

//                  playerMusic(n.channelId, 'https://www.youtube.com/watch?v=LuuOpozKbvE&ab_channel=V%C3%A1clav')
                 
//                 }
//             }) 
               
//     }
//     catch (err) {
//             console.log(err)
//     }
// }//