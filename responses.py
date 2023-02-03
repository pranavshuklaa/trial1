from model import *
from func import *
# from func import get_text
# from func import remove_stop_words_for_input
# from func import encode_input_text
# from func import get_pred
# from func import model1
# from func import bot_precausion
# from func import get_response
# from func import bot_response
# from func import joblib
# from func import  tokenizer
# from func import df2


# In[86]:






# ## Predictions

# In[84]:




df_input = get_text('How to find mental health professional for myself?')

# load artifacts 
tokenizer_t = joblib.load('tokenizer_t.pkl')
vocab = joblib.load('vocab.pkl')

df_input = remove_stop_words_for_input(tokenizer,df_input,'questions')
encoded_input = encode_input_text(tokenizer_t,df_input,'questions')

pred = get_pred(model1,encoded_input)
pred = bot_precausion(df_input,pred)

response = get_response(df2,pred)
bot_response(response)

