import joblib
import pandas as pd
from pydantic import BaseModel
from catboost import CatBoostRegressor


class vagon(BaseModel):
    st_code_snd: int
    st_code_rsv: int

class VagonModel:

    def __init__(self):
        self.df =  pd.read_parquet("df_train.parquet", engine='pyarrow')
        self.model_fname_ = "model.pkl"
        try:
            self.model = joblib.load(self.model_fname_)
        except Exception as _:
            self.model = self._train_model()
            joblib.dump(self.model, self.model_fname_)

    def _train_model(self):
        X = self.df.drop(['y'], axis=1)
        y = self.df[['y']]

        clf = CatBoostRegressor()
        model = clf.fit(X,y)
        return model

    def predict_some(self,  st_code_snd, st_code_rsv):

       data_in = [[st_code_snd, st_code_rsv]]
       prediction = self.model.predict(data_in)
       return prediction[0]




