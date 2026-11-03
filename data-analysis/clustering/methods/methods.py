import numpy as np
from sklearn.cluster import Birch, KMeans, DBSCAN, AgglomerativeClustering
from sklearn.mixture import GaussianMixture
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

class AgglomerativeMethod(BaseClusterMethod):

    def check_metrics(self, X):
        for k in range(2, 6):
            for link in ['ward', 'complete', 'average']:

                current_params = dict(n_clusters=k, linkage=link)

                model = AgglomerativeClustering(**current_params).fit(X)
                labels = model.labels_

                score, metrics = self.evaluate(X, labels)

                self.update_score(
                    score=score, 
                    labels=labels,
                    metrics=metrics, 
                    current_params=current_params
                )

class BirchMethod(BaseClusterMethod):

    def check_metrics(self, X):
        for k in range(2, 6):
            for threshold in [0.3, 0.5, 0.7]:

                current_params = dict(n_clusters=k, threshold=threshold)

                model = Birch(**current_params).fit(X)
                labels = model.labels_

                score, metrics = self.evaluate(X, labels)

                self.update_score(
                    score=score, 
                    labels=labels,
                    metrics=metrics, 
                    current_params=current_params
                )

class GaussianMixtureMethod(BaseClusterMethod):

    def check_metrics(self, X):
        for n_comp in range(2, 6):
            for cov in ['full', 'spherical', 'diag']:

                current_params = dict(n_components=n_comp, covariance_type=cov, random_state=42)

                model = Birch(**current_params).fit(X)
                labels = model.labels_

                score, metrics = self.evaluate(X, labels)

                self.update_score(
                    score=score, 
                    labels=labels,
                    metrics=metrics, 
                    current_params=current_params
                )
                