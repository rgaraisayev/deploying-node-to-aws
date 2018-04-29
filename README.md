# This tutorial describes steps needed to deploy Nodejs app to AWS EC2 Ubuntu

### We need AWS account, ready to deploy Nodejs app and a little bit of brain.

## STEP 1 (warm up)
  * Create Ubuntu instance with prefered memory and storage. In my case it is 8 GB memory and 250 GB SSD.
  * Assign security group with rules. In my case, i added http, http2, ssh.
  * Create key-pair and download it (SAVE IT SOMEWHERE, WE NEED THAT).
  * Wait for instance to come online(3-5 mins)
  * If instance name is empty, double-click on it and write something(Ubuntu, etc)
  
## STEP 2 (Connect using putty, easiest part)
  * First download Putty, you can do it.
  * After downloading Putty. Select the instance from instances list(aws)
  * Right click and select "Connect"
  * Dialog opens. Copy the DNS. It is under "Connect to your instance using its Public DNS:", then click "x" to close it.
  * Open Start menu and type PuttyGen. It should be there.
  * Click "Load" button, and choose "key-pair.pem file you downloaded previously"
  * Then click save private key, and u are done. Save this private key .ppk in somewhere(prefered to be in same folder with .pem file)
  * Now we have .ppk file. Close PuttyGen and open start menu and type Putty and open it
  * Paste the DNS you copied earlier to the input under "Host name"
  * Then on the sidebar find CONNECTION->SSH->AUTH
  * There is an input saying private key file, browse the folder and choose .ppk file of our
  * Then go back to Session on sidebar. There you should see input box with label Saved Sessions. Type some name and click Save
  * This is because we don want to browse this .ppk file everytime we connect.
  * so after saving it should appear on list of saved sessions. Then you double click it.
  * Terminal opens you type "ubuntu" and you are in.
  * If you don want to type ubuntu everytime, you can add ubuntu before DNS and then save to sessions
  * Click Load, add this For ex. ubuntu@mydns then save
  
## STEP 3 (Meet the ubuntu)
  * Install Nodejs, Mongodb, Ngnix, pm2(using npm)
  * If you don have idea to install, type "How to install ...." to google, it will be installed

## STEP 4 (security things(optional))
  * Create seperate user for this project
  * We need create a user in linux, then we create a key-pair to access it using ssh client
  * First: login to ubuntu, and type sudo adduser replace_this_name --disabled-password
  * Then we go to AWS console, and create new Key-Pair (on the sidebar)
  * We download that .pem file, then open PuttyGen and load this file there.
  * We will see public key starting like this 'ssh-...', copy that
  * Then follow this tutorial: [this](https://aws.amazon.com/premiumsupport/knowledge-center/new-user-accounts-linux-instance/)
  * Then like we did for ubuntu user, we just open Putty and browse .ppk file and save session, and connect.
  * NOTE: We dont wont have password for new user, but you can set it later if you want, (login to ubuntu user, and set password to new user)
  * If you want to restrict access to any home folder of users for other users, login to ubuntu user, and type sudo 
  `chmod 0750 /home/username`, noone can read that folder except with privileged ones.
  
## STEP 5 
