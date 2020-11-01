import re
import requests
from typing import List
from bs4 import BeautifulSoup


def get_all_text(company_name: str) -> str:
	url = f'https://www.google.co.il/search?hl=iw&q={company_name}'
	response = requests.get(url)  # response.text => string, response.content => bites
	soap = BeautifulSoup(response.content, 'html.parser')
	
	for s in soap(['header', 'footer', 'head', 'style', 'script', 'noscript']):
		s.extract()
	soap.find('div', attrs={'id': 'st-card'}).extract()
	soap.find('div', attrs={'class': 'KP7LCb'}).extract()
	
	text = soap(string=True)  # same to find_all()
	output = ''
	blacklist = [
		'[document]',
		'html',
		'meta',
		'input',
		# there may be more elements, such as "style", etc.
	]
	for t in text:
		if t.parent.name not in blacklist:
			output += f'{t} '
	return output


def get_only_words(text: str) -> str:
	return ' '.join(re.findall('[\'"א-ת]+', text.lower()))  # return string, each word separate with space


def remove_words_from_text(text: str, words: List[str]) -> str:
	for word in words:
		text = text.replace(word, '')
	return text.strip()


def remove_comp_name_from_text(text: str, comp_name: str) -> str:
	return text.replace(comp_name.split('בעמ')[0].split('בע"מ')[0].split("בע''מ")[0], '').strip()


def remove_stop_words_from_text(text: str, sp: List[str]) -> str:
	word_tokenize = re.split(' +', text.strip())
	filtered_words = [word for word in word_tokenize if word not in sp]
	return ' '.join(filtered_words)


# delete single char words and multi spaces from text
def remove_single_char_words_from_text(text: str) -> str:
	return re.sub(' +', ' ', re.sub('( [א-ת\'"] ([א-ת\'"] )*)', ' ', text))


def create_hebrew_document_with_request(name: str, stop_words: List[str], cities: List[str]) -> str:
	return remove_single_char_words_from_text(remove_words_from_text(remove_stop_words_from_text(remove_comp_name_from_text(
										get_only_words(get_all_text(name)), name), stop_words), cities))

