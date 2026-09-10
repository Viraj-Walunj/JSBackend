require ('dotenv').config()

const express = require('express');
const app = express();
const port = 4000;

const githubData = {
  "login": "Viraj-Walunj",
  "id": 177328088,
  "node_id": "U_kgDOCpHP2A",
  "avatar_url": "https://avatars.githubusercontent.com/u/177328088?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Viraj-Walunj",
  "html_url": "https://github.com/Viraj-Walunj",
  "followers_url": "https://api.github.com/users/Viraj-Walunj/followers",
  "following_url": "https://api.github.com/users/Viraj-Walunj/following{/other_user}",
  "gists_url": "https://api.github.com/users/Viraj-Walunj/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Viraj-Walunj/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Viraj-Walunj/subscriptions",
  "organizations_url": "https://api.github.com/users/Viraj-Walunj/orgs",
  "repos_url": "https://api.github.com/users/Viraj-Walunj/repos",
  "events_url": "https://api.github.com/users/Viraj-Walunj/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Viraj-Walunj/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Viraj Walunj",
  "company": null,
  "blog": "",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "Hey there! I'm a 4th-year B.Tech CSE Student in PCET's Pimpri Chinchwad University, Pune with a real passion for software engineering.I'm always eager to learn.",
  "twitter_username": null,
  "public_repos": 23,
  "public_gists": 0,
  "followers": 3,
  "following": 0,
  "created_at": "2024-08-02T12:53:38Z",
  "updated_at": "2026-08-05T11:52:58Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/github', (req, res) =>{
    res.json(githubData)
})

app.get('/login', (req,res)=>{
    res.send('<h1>please login first</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});