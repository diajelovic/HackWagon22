import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.linear_model import Lasso, Ridge
from sklearn.tree import DecisionTreeRegressor
from xgboost import XGBRegressor as XGB
import math
from sklearn.model_selection import train_test_split

from sklearn.preprocessing import StandardScaler

from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import pickle
# In[571]:


try:
    df = pd.read_parquet("df_train.parquet", engine='pyarrow')
    df_test = pd.read_parquet("df_test.parquet", engine='pyarrow')
    csv_example = pd.read_csv('sub_example.csv')
    
except Exception as e:
        print('Exception:',  e.__class__)



# Заменим пропуски

df['fr_id'] = df['fr_id'].fillna(0)
df['route_type'] = df['route_type'].fillna(2)


# Приведение типов

df['fr_id'] = df['fr_id'].astype('int32')
df['route_type'] = df['route_type'].astype('int32')


# Восполним пропущенное расстояние



le = LabelEncoder()
list1 = list(df['st_code_rsv'])
list1.extend(list(df['st_code_snd']))
le.fit(list1)
df['st_code_snd'] = le.transform(df['st_code_snd'])
df['st_code_rsv'] = le.transform(df['st_code_rsv'])


# In[584]:


list_from = list(df['st_code_rsv'])
list_to = list(df['st_code_snd'])
list_rout = []

for i in range(len(list_from)):
    list_rout.append(str(min(list_from[i], list_to[i])) + str(max(list_from[i], list_to[i])))

df['route_code'] = list_rout


# In[585]:


df['distance'] = df['distance'].fillna(df.groupby('route_code')['distance']
                                             .transform("median"))
df['distance'] = df['distance'].fillna(0)


# ### Закодируем `route_type`


df['rout_t1'] = df['route_type'].replace({2:0,3:0,4:0})
df['rout_t3'] = df['route_type'].replace({1:0,2:0,3:1,4:0})
df['rout_t4'] = df['route_type'].replace({1:0,2:0,3:0,4:1})



# # Машинное обучение


X = df.drop(['date_depart_year',
             'st_code_snd', 'st_code_rsv', 
             'common_ch', 'vidsobst', 
            'route_code', 'route_type',
             'y'], axis=1)
y= df[['y']]


# Разделим датасет на тренировочную и тестовую выборки

X_train, X_test, y_train, y_test = train_test_split(X,y,test_size=0.2, random_state=0)


# Стандартизируем данные методом StandartScaler

scaler = StandardScaler()
scaler.fit(X)
X_train_st = scaler.transform(X_train)
X_test_st = scaler.transform(X_test)


# ### Функция расчета ошибки

def make_prediction(m, X_train, y_train):
    model = m
    model.fit(X_train, y_train)
    return model
    
XGB_model =  make_prediction(XGB(), X_train, y_train)
pickle.dump(XGB_model, open("model.pkl", "wb"))


