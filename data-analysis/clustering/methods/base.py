from sklearn.metrics.cluster import (
    silhouette_score,
    davies_bouldin_score,
    calinski_harabasz_score
)
import numpy as np

class BaseClusterMethod:
    def __init__(self) -> None:
        self.best_params = None
        self.best_labels = None
        self.best_metrics = {
            'silhouette_score': -1,
            'davies_bouldin_score': 999,
            'calinski_harabasz_score': -1,
            'noise_ratio': 1,
            'balance': 0
        }
    
    def evaluate(self, X, labels) -> dict[str, float]:
        n_clusters = len(set(labels))

        if n_clusters == 1 or n_clusters >= len(X) - 1:
            return self.best_metrics

        silhouette = silhouette_score(X, labels)
        davies_bouldin = davies_bouldin_score(X, labels)
        calinski_harabasz = calinski_harabasz_score(X, labels)
        noise_ratio = np.sum(labels == -1) / len(labels)

        cnt = np.bincount(labels[labels != -1])
        balance = np.min(cnt) / np.max(cnt)

        return {
            'silhouette_score': silhouette,
            'davies_bouldin_score': davies_bouldin,
            'calinski_harabasz_score': calinski_harabasz,
            'noise_ratio': noise_ratio,
            'balance': balance
        }
