# Le Hong Phong Highschool for the Gifted

![Alt text](images/img.png)

## **> Introduction** 


The web has 4 pages (languages in use: html, css, javascript):

- "Homepage": Page to introduce the web.
- "Chat with Me": Page contains Chatbot and information about how to use Chatbot.
- "Take Quiz": Page about quizzes, sample questions for users to ask Chatbot.
- "Contact & Feedback": Page that illustrates my topic inspiration and area for user feedback.

You can interact with a friendly and intelligent chatbot that can answer your questions about my school. The Chatbot is powered by artificial intelligence and natural language processing technologies, which enable it to understand your queries and respond accordingly. Whether you are a prospective student, a parent, a teacher, an alumni or a visitor, you will find our chatbot helpful and engaging.

After that, you can visit the "Take Quiz" page on my website to see how many points you can get from the information you have just asked the Chatbot. These questions are also samples for you to ask the Chatbot if you would like.

Please feel free to send me feedback about my website by accessing the "Contact & Feedback" page - the last page on the navigation bar. Your message will be automatically sent to my email. If it is a question, I will give you the answer as quickly as possible. Please be patient and wait for my reply! Thank you so much!

.
.
.
---

## **> Installation and Activate**

### 1) Installation
- My website has no back-end code, so all you have to do is install the "Rasa Chatbot" and activate it.

- You can see the tutorial to download it on Rasa Docs: [This is the link](https://rasa.com/docs/rasa/installation/installing-rasa-open-source)

- But if your computer runs on macOS, the installation process can get more difficult and complicated.
(Just like my Macbook, so besides reading Rasa docs, please follow these steps.)

- First, install homebrew and miniforge for MacOS on this page: [This is the link](https://brew.sh/)

Second, create the environment.
```
conda create -n steamhack python=3.10
```
Third, activate the environment.
```
conda activate steamhack
```
Fourth, install openblas.
```
brew install openblas
export OPENBLAS=$(/opt/homebrew/bin/brew --prefix openblas)
export CFLAGS="-falign-functions=8 ${CFLAGS}"
```
Fifth, install sickit-learn.
```
pip install scikit-learn
```
Sixth, install scipy.
```
brew install scipy
```
Then, install all neccessary libraries with a specific version
```
pip install -r requirements.txt
```
Last, install Rasa!
```
pip install rasa
```

### 2) Activate

Create a folder name "Rasa" for all Rasa Chatbot's files.

Open your terminal and use the command below. (Or copy the folder's path and paste it after "cd" as an alternative to "Rasa" phrase.)
```
cd Rasa
```
Activate the environment.
```
conda activate steamhack
```
Use this command to train the Chatbot.
```
rasa train
```
Use this command to test the Chatbot.
```
rasa shell
```
To activate it on the website, use this command and let it run.
```
rasa run -m models --enable-api --cors "*" --debug
```
Now, the Chatbot should be available on server "http://localhost:5005/webhooks/rest/webhook"

.
.
.
---

## **> My Own Experience** 

For round 1, I have 11 days (from the day I received the topic to the deadline for submission) to prepare for my project. In the first step, I spent time brainstorming ideas for the project, I chose the direction of developing a Chatbot integrated into the web to interact with users. After that, I limited my ideas to FAQ form, so the data that Chatbot can answer revolves around one main topic, and besides that, only basic, uncomplicated conversations.

In order to allocate time reasonably, I have made work plans to do each day:

- Day 1 and 2: Complete ideas and plans.
- Day 3 and 4: Write the basic framework of the Web using html, css.
- Day 5 and 6: Complete the opening and closing pages of the Web.
- Day 6: Complete the “Take quiz” page.
- Day 7: Download necessary resources to train Chatbot Rasa on Vscode.
- Day 8: Train Chatbot Rasa and integrate it into Web UI.
- Day 9: Test and fix bugs continuously to make sure Chatbot runs fine.
- Day 10: Deploy Web and continue testing.
- Day 11: Record video and submit the work.

One of the biggest challenges I faced in creating my project was installing and integrating the Rasa Chatbot into my website. Because I use a Macbook, I had to download many libraries that are not available or compatible with Apple or Linux systems. Moreover, I had to choose the right versions of the libraries and requirements to avoid errors and conflicts. This took me a lot of time and effort to figure out and fix. However, I am glad that I learned new things and how to overcome challenges because it helped me improve my skills and confidence in coding and problem-solving.
