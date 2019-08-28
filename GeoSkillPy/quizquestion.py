import csv

class QuizQuestion:
	"""Represents a quiz question."""

	def __init__(self, question, answer):
		"""Create a new quiz question with its answer. """
		self.question = question
		self.answer = answer

	def get_question(self):
		"""Getter method for the question text."""
		return self.question

	def get_answer(self):
		"""Getter method for the answer text."""
		return self.answer

	# def __repr__(self):
	# 	return "Question: {0} Answer: {1}\n".format(self.question, self.answer)

	@staticmethod
	def get_game_questions(indices):
		"""Returns a JSON compatible list of QuizQuestions at the specified indices."""
		game_questions = []
		for ind in indices:
			question_text = questions_all[ind].get_question()
			answer_text = questions_all[ind].get_answer()
			game_questions.append([question_text, answer_text])
		return game_questions


# Idea: At the beginning of the game, users can choose a country/region to focus questions on
questions_all = []

with open('questions.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            print('Column names are {0}'.format(','.join(row)))
            line_count += 1
            continue
        else:
            print(row[0], row[1])
            line_count += 1
        questions_all.append(QuizQuestion(row[0], row[1]))
    # print('Processed {0} lines.'.format(line_count))
