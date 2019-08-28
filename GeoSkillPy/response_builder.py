# JSON RESPONSE HELPER FUNCTIONS

# The response of our Lambda function should be in JSON format. These functions
# are used by both the intent handlers and the request handlers to build the output.
def plain_text_builder(text_body):
    text_dict = {}
    text_dict['type'] = 'PlainText'
    text_dict['text'] = text_body
    return text_dict

def reprompt_builder(repr_text):
    reprompt_dict = {}
    reprompt_dict['outputSpeech'] = plain_text_builder(repr_text)
    return reprompt_dict
    e_dict
def card_builder(c_text, c_title):
    card_dict = {}
    card_dict['type'] = "Simple"
    card_dict['title'] = c_title
    card_dict['content'] = c_text
    return card_dict

def response_field_builder_with_reprompt_and_card(output_speech_text, card_text, card_title, reprompt_text, should_end_session):
    speech_dict = {}
    speech_dict['outputSpeech'] = plain_text_builder(output_speech_text)
    speech_dict['card'] = card_builder(card_text, card_title)
    speech_dict['reprompt'] = reprompt_builder(reprompt_text)
    speech_dict['shouldEndSession'] = should_end_session
    return speech_dict

def build_json_response(output_speech_text, card_text, card_title, reprompt_text, game_info, should_end_session):
    response_dict = {}
    response_dict['version'] = '1.0'
    response_dict['sessionAttributes'] = game_info
    response_dict['response'] = response_field_builder_with_reprompt_and_card(output_speech_text, card_text, \
                                                                    card_title, reprompt_text, should_end_session)
    return response_dict