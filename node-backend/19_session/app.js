const express = require("express");
const app = express();
const PORT = 8000;
const session = require("express-session");

app.set("view engine", "ejs");

app.use(
  session({
    secret: "secret key",
    resave: false, 
    saveUninitialized: true, 
    })
);

app.get("/", (req, res) => {
  const user = req.session.user
  if(user){
    res.render('index', {isLogin : true, user: user})
  } else {
    res.render('index', isLogin: false)
  }
});

app.get('/login', (req,res)=>{
  req.session.user ='guho'
  res.send(
    `<script>
    alert('로그인 성공');
    location.href='/';
</script>`
  )
})

app.get("/logout", (req, res) => {
  req.session.destroy(function (err) {
    res.send(
      `<script>
            alert('로그아웃 성공');
            location.href='/';
        </script>`
    );
  });
});



app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
