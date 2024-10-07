#!/usr/bin/env python
# coding: utf-8

# In[1]:


pip install nltk


# In[2]:


import nltk
from nltk.chat.util import Chat, reflections

# Define pairs for possible responses
pairs = [
    [
        r"(.*) (sad|depressed|unhappy|down|lost|tired)",
        ["I'm sorry you're feeling that way. Would you like to talk more about what's troubling you?", 
         "I'm here for you. What’s been on your mind?", 
         "It’s okay to feel this way. Do you want to share what’s been bothering you?"]
    ],
    [
        r"(.*) (anxious|nervous|worried|stressed)",
        ["I'm sorry you're feeling anxious. Do you want to talk about what's making you feel that way?", 
         "Anxiety can be tough to handle, but talking might help. What’s on your mind?", 
         "It's important to take things one step at a time. What’s causing your anxiety?"]
    ],
    [
        r"I feel (.*)",
        ["Why do you feel %1?", 
         "Can you tell me more about why you're feeling %1?", 
         "What happened to make you feel %1?"]
    ],
    [
        r"(.*) (happy|good|okay|better|great)",
        ["I'm glad to hear that! What made you feel this way?", 
         "That’s wonderful! Would you like to share what’s been going well for you?"]
    ],
    [
        r"(.*) (help|support)",
        ["I’m here to help. Tell me what’s going on.", 
         "You don’t have to go through this alone. What can I do to support you?", 
         "It's okay to ask for help. What's been on your mind?"]
    ],
    [
        r"quit",
        ["Thank you for chatting with me. Take care and remember, it's always okay to seek help from others.", 
         "Goodbye! Feel free to talk to me whenever you need."]
    ],
    [
        r"(.*)",
        ["I hear you. Could you tell me a bit more?", 
         "Tell me how that makes you feel.", 
         "Would you like to talk more about it?"]
    ]
]

# Create a chatbot using NLTK's Chat class
def mental_health_chatbot():
    print("Hello! I'm here to listen and help you with your thoughts. (type 'quit' to stop)")
    chat = Chat(pairs, reflections)
    chat.converse()

# Start the chatbot
if __name__ == "__main__":
    mental_health_chatbot()


# In[ ]:




