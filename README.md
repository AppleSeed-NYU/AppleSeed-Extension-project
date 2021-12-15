# AppleSeed-Extension-project
### Goal:
Reward users for their eco-friendly purchases. 

### How:
Our chrome extension would generates digital points whenever a user purchases products from our selected eco partners. The digital points are used to grow virtual trees inside a virtual environment, embedded in the extension. Once a tree has reached its final growth stage, we plant a real tree.

## AppleSeed-test-case setup

1. Clone the repo.
2. go to chrome://extensions/
3. Enable Developer Mode by clicking the toggle switch next to Developer mode.
4. Click the Load unpacked button and select the extension file you cloned.


## Frontend
When user intall our extention, a digital game would be shown on the extension. So that they would have a sense of enagement.
![image](https://user-images.githubusercontent.com/50645596/146235872-41e21f26-3e9b-491b-a376-9e3ac404fbf1.png)


## Backend
After users make a consent to our extension, we are allowed to collect user information, such as their user account and purchase history.
We store those data to firebase which would make sure the secutity of their information. 
Here is a simple structure of the data we are going to collect. We are able to read and write them to database by our extension.


![image](https://user-images.githubusercontent.com/50645596/146235664-2a261a83-8ac0-4bfe-859f-f49735b7cd89.png)


