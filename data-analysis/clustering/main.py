import os
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from pathlib import Path
from sklearn.preprocessing import StandardScaler
from methods.methods import KMeansMethod, DBSCANMethod, AgglomerativeMethod, BirchMethod

class ClusteringPipeline:
    def __init__(self, output_dir: str = 'clustering_results') -> None:
        self.output_dir = output_dir
        self.X = None

        if not os.path.exists(self.output_dir):
            os.makedirs(self.output_dir)

    def get_X_from_file(self, file_path: str):
        with open(file_path) as file:
            df = pd.read_csv(file, sep='\s+', skiprows=4)
        X = np.array([df['Freq'], df['Range']]).T
        return X

    def process_file(self, file_path: str):
        X = self.get_X_from_file(file_path)
        self.X = StandardScaler().fit_transform(X)
        print(self.X.shape)

        methods = {
            'kmeans': KMeansMethod(),
            'dbskan': DBSCANMethod(),
            'agglomerative': AgglomerativeMethod(),
            'birch': BirchMethod()
        }

        for name, method in methods.items():
            method.check_metrics(X)

        method_name_max_score= max(methods, key = lambda name: methods[name].best_score)
        best_method = methods[method_name_max_score]

        return best_method, method_name_max_score

    def save_to_file(self, file_path: str):
        best_method, name = self.process_file(file_path)

        plt.figure(figsize=(8, 6))

        plt.scatter(self.X[:, 0], self.X[:, 1], c=best_method.best_labels)

        title_text = (
            f'{name}\n'
            f'Гиперпараметры: {best_method.best_params}\n'
            f'Метрики: {best_method.best_metrics_summary}'
        )
        plt.title(title_text, fontsize=9)

        file_name = Path(file_path).name
        save_path = os.path.join(self.output_dir, f'result_{file_name}.png')
        plt.savefig(save_path, bbox_inches='tight', dpi=150)
        print('ok')

        plt.show()

if __name__ == '__main__':

    test = ClusteringPipeline()

    current_dir = Path(__file__).resolve().parent
    file_path = str(current_dir / '20230328-alDhafra')

    test.save_to_file(file_path)
