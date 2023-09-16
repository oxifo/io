  <MenuView class="MenuView">
    <style type="text/css">
      #logo{
        width:50%;
        display:block;
        margin:50px auto;
      }
      button{
        display:block;
        margin:16px auto;
        min-width:150px;
        background:white;
        color:black;
        border:none;
        box-shadow:0px 0px 3px #CCCCCC;
        border-radius:3px;
        padding:9px 30px;
        transition-duration:0.5s;
        outline:none;
      }
      poz{
        width:fit-content;
        display:block;
        margin:25px auto;
        height:auto;
        box-shadow:0px 0px 3px #CCCCCC;
        padding:15px 30px;
        border-radius:5px;
        padding:10px 30px;
      }
      button:hover{
        background:blue;
        color:white;
      }
      a{
        text-decoration:none;
        padding:5px;
        color:blue;
      }
      #share{
        width:55px;
        height:auto;
        display:block;
        margin:5px auto;
      }
      basic{
        padding:5px 30px;
        display:block;
        margin:5px auto;
        border:1px solid #CCC;
        width:fit-content;
        border-radius:10px;
      }
      hr{
        border:none;
        width:100%;
        background:#CCC;
        height:0.5px;
        margin:30px 0px;
      }
    </style>
    <img id="logo"src="./os/icons/logo.png"/>
    <poz onclick="Java.PozApp('http://poz.free.nf/')">
      <a>Login</a>
      OR
      <a>SignUp</a>
    </poz>
    <hr/>
    <basic>
    <button onclick="Java.LoadPage('file:///android_asset/DownloadList.html','')">Watch OffLine</button>
    <button>Lastest Movies</button>
    </basic>
    <hr/>
    <basic>
      <button onclick="Java.CreditAgent()">Credit Agent</button>
     <button onclick="Java.share('http://pozapp.iblogger.org/')">Share App</button>
    </basic>

  </MenuView>