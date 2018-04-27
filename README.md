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
  * Install Nodejs, Mongodb, Ngnix
  * If you don have idea to install, type "How to install ...." to google, it will be installed
