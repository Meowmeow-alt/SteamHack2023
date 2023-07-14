# Chatbot FAQ about Le Hong Phong Highschool for the Gifted

## **> Introduction** 

This website is about Le Hong Phong High School for the Gifted - my school. Founded in 1927 by the French colonizers, the school has a rich history and a tradition of excellence in education. The school is located in District 5 of Ho Chi Minh City and the campus covers a large area, with modern facilities and a beautiful garden.

Students are talented and hardworking. They excel not only in academics, but also in extracurricular activities, such as sports, arts, music, clubs and social services. They have also won many awards and honors in national and international competitions.

The school is proud of its alumni. Some of the notable alumni include Nguyen Cao Ky (former Prime Minister of South Vietnam), Tran Dai Quang (former President of Vietnam), Nguyen Tan Dung (former Prime Minister of Vietnam), Nguyen Xuan Phuc (current Prime Minister of Vietnam), Le Thanh Hai (former Secretary of Ho Chi Minh City Party Committee), Nguyen Thien Nhan (current Secretary of Ho Chi Minh City Party Committee), Nguyen Thanh Phong (current Chairman of Ho Chi Minh City People's Committee) and many others.

You can interact with a friendly and intelligent chatbot that can answer your questions about my school. The Chatbot is powered by artificial intelligence and natural language processing technologies, which enable it to understand your queries and respond accordingly. Whether you are a prospective student, a parent, a teacher, an alumni or a visitor, you will find our chatbot helpful and engaging.

After that, you can visit the "Take Quiz" page on my website to see how many points you can get from the information you have just asked the Chatbot. These questions are also samples for you to ask the Chatbot if you would like.

Please feel free to send me feedback about my website by access the "Contact & Feedback" page - the last page on the navigation bar. Your message will be automatically sent to my email. If it is a question, I will give you the answer as quick as possible. Please be patient and wait for my reply! Thank you so much!

## **> Installation and Activate**

### 1) Installation
My website has no back-end code, so all you have to do is install the "Rasa Chatbot" and activate it.

You can see the tutorial to download it on Rasa Docs: [This is the link](https://rasa.com/docs/rasa/installation/installing-rasa-open-source)

But if your computer runs on macOS, installation process can get more difficult and complicated.
(Just like my Macbook, so besides reading Rasa docs, please follow these steps.)

First, install homebrew.
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
In case the PATH variable had not been automatically setup, run:
```
export PATH=/opt/homebrew/bin:$PATH
export PATH="$HOME/.cargo/bin:$PATH"
```
Second, install Openblas.
```
brew reinstall openblas
```
Third, install sickit-learn
```
pip install scikit-learn
```
Fourth, create environment.
```
conda create -n steamhack python=3.10
```
Then, activate environment
```
conda activate steamhack
```
Install all neccessary libraries with a specific version
```
pip install -r requirements.txt
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