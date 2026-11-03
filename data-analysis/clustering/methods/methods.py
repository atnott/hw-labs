import numpy as np
from sklearn.cluster import KMeans, DBSCAN
from .base import BaseClusterMethod

class KMeansMethod(BaseClusterMethod):

    def check_metrics(self, X):
        for k in range(2, 7):

            current_params = {'n_clusters': k, 'random_state': 42}

            model = KMeans(**current_params).fit(X)
            labels = model.labels_

            score, metrics = self.evaluate(X, labels)

            self.update_score(
                    score=score, 
                    labels=labels,
                    metrics=metrics, 
                    current_params=current_params
            )

class DBSCANMethod(BaseClusterMethod):

    def check_metrics(self, X):
        for eps in np.arange(0.1, 1.1, 0.1):
            for min_samples in range(3, 20):
                
                current_params = {'eps': float(eps), 'min_samples': min_samples}

                model = DBSCAN(**current_params).fit(X)
                labels = model.labels_

                score, metrics = self.evaluate(X, labels)

                self.update_score(
                    score=score, 
                    labels=labels,
                    metrics=metrics, 
                    current_params=current_params
                )

