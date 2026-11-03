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

        if n_clusters < 2 or n_clusters >= len(X) - 1:
            return -999, {}

        silhouette = silhouette_score(X, labels)
        davies_bouldin = davies_bouldin_score(X, labels)
        calinski_harabasz = calinski_harabasz_score(X, labels)
        noise_ratio = np.sum(labels == -1) / len(labels)

        _, counts = np.unique(labels[labels != -1], return_counts=True)
        balance = float(np.min(counts) / np.max(counts)) if len(counts) > 0 else 0.0

        norm_silhouette = (silhouette + 1) / 2
        norm_davies_bouldin = 1 / (1 + davies_bouldin)
        norm_calinski_harabasz = float(np.tanh(calinski_harabasz / 1000))
        norm_noise_ratio = 1 - noise_ratio

        norm_list = [norm_silhouette, norm_davies_bouldin, norm_calinski_harabasz, norm_noise_ratio, balance]

        weights = [0.4, 0.2, 0.1, 0.1, 0.2]

        metrics_summary = {
            'silhouette': round(silhouette, 3),
            'davies_bouldin': round(davies_bouldin, 3),
            'calinski': round(calinski_harabasz, 3),
            'noise_ratio': round(noise_ratio, 3),
            'balance': round(balance, 3)
        }

        return np.dot(norm_list, weights), metrics_summary

    def update_score(self, score, labels, metrics, current_params):

        if score == -999:
            return

        if score > self.best_score:
            self.best_score = score
            self.best_labels = labels
            self.best_metrics_summary = metrics
            self.best_params = current_params
