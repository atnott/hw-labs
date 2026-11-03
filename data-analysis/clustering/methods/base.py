from sklearn.metrics.cluster import (
    silhouette_score,
    davies_bouldin_score,
    calinski_harabasz_score
)
import numpy as np

class BaseClusterMethod:
    def __init__(self) -> None:
        self.best_score = -999
        self.best_params = None
        self.best_labels = None
        self.best_metrics_summary = {}
    
    def evaluate(self, X, labels) -> dict[str, float]:
        n_clusters = len(set(labels)) - (1 if -1 in labels else 0)

        if n_clusters == 1 or n_clusters >= len(X) - 1:
            return -999, {}

        silhouette = silhouette_score(X, labels)
        davies_bouldin = davies_bouldin_score(X, labels)
        calinski_harabasz = calinski_harabasz_score(X, labels)
        noise_ratio = np.sum(labels == -1) / len(labels)

        cnt = np.bincount(labels[labels != -1])
        balance = np.min(cnt) / np.max(cnt)

        norm_silhouette = (silhouette + 1) / 2
        norm_davies_bouldin = 1 / (1 + davies_bouldin)
        norm_calinski_harabasz = float(np.tanh(calinski_harabasz / 1000))
        norm_noise_ratio = 1 - noise_ratio

        norm_list = [norm_silhouette, norm_davies_bouldin, norm_calinski_harabasz, norm_noise_ratio, balance]

        weights = [0.4, 0.2, 0.1, 0.1, 0.2]

        metrics_summary = {
            'silhouette': silhouette,
            'davies_bouldin': davies_bouldin,
            'calinski': calinski_harabasz,
            'noise_ratio': noise_ratio,
            'balance': balance
        }

        return np.dot(norm_list, weights), metrics_summary
