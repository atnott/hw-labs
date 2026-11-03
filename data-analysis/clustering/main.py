import os
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from pathlib import Path
from methods.methods import KMeansMethod

class ClusteringPipeline:
    def __init__(self, output_dir: str = 'clustering_results') -> None:
        self.output_dir = output_dir

        if not os.path.exists(self.output_dir):
            os.makedirs(self.output_dir)

    def get_X_from_file(self, file_path: str):
        with open(file_path) as file:
            df = pd.read_csv(file, sep='\s+', skiprows=4)
        X = np.array([df['Freq'], df['Range']]).T
        return X

    def process_file(self, file_path: str):
        X = self.get_X_from_file(file_path)
        print(X.shape)

        methods = {
            'kmeans': KMeansMethod()
        }

        for name, method in methods.items():
            method.check_metrics(X)

        method_name_max_score= max(methods, key = lambda name: methods[name].best_score)
        best_method = methods[method_name_max_score]

        plt.title(method_name_max_score)
        plt.scatter(X[:, 0], X[:, 1], c=best_method.best_labels)
        plt.show()

if __name__ == '__main__':

    test = ClusteringPipeline()

    current_dir = Path(__file__).resolve().parent
    file_path = str(current_dir / '20230328-alDhafra')

    test.process_file(file_path)
