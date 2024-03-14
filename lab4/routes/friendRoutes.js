const express = require("express");
const router = express.Router();
const friends = require('../models/friends')

router.get('/', (req, res) => {
    res.json(friends)
})
router.get('/filter', (req, res) => {
    console.log(req.query)
    let filterGender = req.query.gender;
    let filterLetter = req.query.letter
    let matchingFriends = [...friends];
    

    if (filterGender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender == filterGender);
    }
    if (filterLetter){
        
    }
    
    if (matchingFriends.length > 0) {
        res.status(200).json(matchingFriends)
    } else {
    
        res.status(404).json({error: "No friends matching gender "+filterGender})
    }  
    if (filterLetter){
        const filteredFriends = friends.filter((friend) =>
      friend.name.toLowerCase().startsWith(letter.toLowerCase())
    );
    res.json(filteredFriends);
  } else {
   
    res.json(friends);

    }
});

router.get('/info', (req, res) => {
    const userAgent = req.get("user-agent");
    const contentType = req.get("content-type");
    const acceptHeaders = req.get("accept");
  
    const info = {
      "user-agent": userAgent,
      "content-type": contentType,
      "accept": acceptHeaders,
    };
  
    res.json(info);
  });

router.get('/:id', (req, res) => {
    console.log(req.params)
    let friendId = req.params.id; 

    if (!friendId) {
        
        res.status(404).json({ error: "Friend not found" });
      } else {
       
        res.json({result: 'Finding friend with ID ' + friendId});
      }
 
    
});


router.post('/', (req, res) => {
    let newFriend = req.body; 
    console.log(newFriend) 

   
    if (!newFriend.name || !newFriend.gender) {
        res.status(500).json({error: 'Friend object must contain a name and gender'});
        return;
    }
    else if (!newFriend.id) {
        newFriend.id = friends.length + 1; 
    }

    
    friends.push(newFriend)
    res.status(200).json(newFriend)
})

router.put('/:id', (req, res) => {
    let friendId = req.params.id;
    let updatedFriend = req.body;

    res.json({result: 'Updated friend with ID ' + friendId, data: updatedFriend})
})

module.exports = router;