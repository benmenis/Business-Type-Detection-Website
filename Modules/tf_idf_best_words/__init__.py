import pandas as pd
import numpy as np
from functools import reduce
from typing import List, Tuple, Iterable
from collections import Counter
from sklearn.feature_extraction.text import TfidfVectorizer


def create_tfidf(documents: List[str], index: List[str]) -> Tuple[pd.DataFrame, pd.DataFrame]:
	vectorizer = TfidfVectorizer()
	vectors = vectorizer.fit_transform(documents)  # fit tf-idf on documents
	all_words = vectorizer.get_feature_names()
	all_words_idf = vectorizer.idf_
	idf_df = pd.DataFrame({'idf': all_words_idf}, index=all_words)
	idf_df.index.name = 'word'
	all_words_X_train = vectors.todense().tolist()
	tf_idf_df = pd.DataFrame(all_words_X_train, columns=all_words, index=index)
	tf_idf_df.index.name = 'company'
	return tf_idf_df, idf_df


def tf_idf_nbest_feature_selection(tf_idf_df: pd.DataFrame, idf_df: pd.DataFrame,
                                        n_best: int = 0) -> Tuple[pd.DataFrame, pd.DataFrame]:
	best_words = []
	for i, row in tf_idf_df.iterrows():
		best_words += row.sort_values().index.tolist()[-n_best:]
	words = set(best_words)
	return tf_idf_df[words], idf_df.loc[words]


#  calculate term frequency. Iterate over the words list and calculate tf for all words.
def calculateTF(document: str, words: List[str]) -> List[float]:
	doc_list = document.split(' ')
	counter = Counter(doc_list)
	all_words = len(doc_list)
	return [counter[word] / all_words if word in counter else 0 for word in words]


def norm_l2(vector: Iterable[float]) -> List[float]:
	sum_of_squares = reduce(lambda x, y: x + y**2, vector, 0)
	denominator = np.sqrt(sum_of_squares)
	return [vi/denominator if denominator else 0 for vi in vector]


def create_test_tf_idf(documents: List[str], idf: Iterable, vocabulary: List[str]) -> List[List[float]]:
	tfs = [calculateTF(documnt, vocabulary) for documnt in documents]  # calculate tf for all test companies
	return [norm_l2([tf_i * idf_i for tf_i, idf_i in zip(tf, idf)]) for tf in tfs]

