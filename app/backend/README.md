# project-timesheet - BackEnd
<h1>List of endpoints</h1>
<h3>Activities:</h3>
<h4>/activity</h4>
<span>GET - List of all resgistered activities.</span>
<h3>Jobs:</h3>
<h4>/job</h4>
<span>GET - List of all resgistered jobs.</span>
<span>POST - Register a new job.</span>
<h4>/job/:id</h4>
<span>GET - List of all resgistered jobs by id.</span>
<span>PATCH - Update a job by id.</span>
<h3>Users:</h3>
<h4>/user</h4>
<span>GET - List of all resgistered users.</span>
<span>POST - Register a new user.</span>
<h4>/user/:id</h4>
<span>GET - List of all resgistered users by id.</span>
<span>PATCH - Update an user by id.</span>
<h4>/user/:id/activity</h4>
<span>GET - List of all resgistered activities for the userid.</span>
<span>POST - Register a new activity for the userid.</span>
<h4>/user/:id/activity/totalhours</h4>
<span>GET - List total of hours per type for the userid</span>


