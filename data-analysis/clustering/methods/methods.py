from sklearn.cluster import KMeans
from .base import BaseClusterMethod

class KMeansMethod(BaseClusterMethod):

    def check_metrics(self, X):
        for k in range(2, 7):

            current_params = {'n_clusters': k, 'random_state': 42}

            model = KMeans(**current_params)
            labels = model.fit(X)

            score, metrics = self.evaluate(X, labels)

            if score > self.best_score:
                self.best_score = score
                self.best_labels = labels
                self.best_metrics_summary = metrics
                self.best_params = current_params
